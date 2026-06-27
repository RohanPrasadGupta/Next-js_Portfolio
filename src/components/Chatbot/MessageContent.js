const TRAILING_PARAGRAPH =
  /^(.+?)\s+((?:Additionally|Also|Furthermore|Moreover|In addition|Rohan has|He has|They have|Note that|Please note).+)$/i;

function FormattedText({ text }) {
  if (!text) return null;

  if (!text.includes("**")) {
    return text;
  }

  const parts = text.split(/\*\*([^*]+)\*\*/g);

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-900">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function extractBulletItems(body) {
  const cleaned = body.replace(/^-\s*/, "").trim();
  if (!cleaned) return { items: [], trailing: null };

  const parts = cleaned.split(/\s+-\s+/).map((s) => s.trim()).filter(Boolean);
  if (parts.length === 0) return { items: [], trailing: cleaned };

  const last = parts[parts.length - 1];
  const trailingMatch = last.match(TRAILING_PARAGRAPH);

  if (trailingMatch) {
    parts[parts.length - 1] = trailingMatch[1].trim();
    return { items: parts, trailing: trailingMatch[2].trim() };
  }

  return { items: parts, trailing: null };
}

function parseMultilineContent(text) {
  const blocks = [];
  const lines = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);

  let currentSection = null;
  let currentItems = [];

  const flushSection = () => {
    if (currentSection) {
      blocks.push({ type: "section", title: currentSection, items: [...currentItems] });
      currentSection = null;
      currentItems = [];
    }
  };

  for (const line of lines) {
    const headerMatch = line.match(/^\*\*([^*]+):\*\*\s*(.*)$/);
    if (headerMatch) {
      flushSection();
      currentSection = headerMatch[1];
      const rest = headerMatch[2].trim();
      if (rest.startsWith("- ")) {
        currentItems.push(rest.slice(2).trim());
      } else if (rest) {
        blocks.push({ type: "text", content: rest });
      }
      continue;
    }

    if (line.startsWith("- ")) {
      if (!currentSection) {
        blocks.push({ type: "list", items: [line.slice(2).trim()] });
      } else {
        currentItems.push(line.slice(2).trim());
      }
      continue;
    }

    flushSection();
    blocks.push({ type: "text", content: line });
  }

  flushSection();
  return blocks;
}

function parseInlineContent(text) {
  const trimmed = text.trim();
  const sectionMatches = [...trimmed.matchAll(/\*\*([^*]+):\*\*/g)];

  if (sectionMatches.length === 0) {
    return [{ type: "text", content: trimmed }];
  }

  const normalized = trimmed.replace(/\s+/g, " ").trim();
  const sectionMatchesNormalized = [...normalized.matchAll(/\*\*([^*]+):\*\*/g)];

  const blocks = [];
  const intro = normalized.slice(0, sectionMatchesNormalized[0].index).trim();
  if (intro) blocks.push({ type: "text", content: intro });

  for (let i = 0; i < sectionMatchesNormalized.length; i++) {
    const title = sectionMatchesNormalized[i][1];
    const start =
      sectionMatchesNormalized[i].index + sectionMatchesNormalized[i][0].length;
    const end =
      i + 1 < sectionMatchesNormalized.length
        ? sectionMatchesNormalized[i + 1].index
        : normalized.length;
    const body = normalized.slice(start, end).trim();
    const { items, trailing } = extractBulletItems(body);

    if (items.length > 0) {
      blocks.push({ type: "section", title, items });
    } else if (body) {
      blocks.push({ type: "text", content: body });
    }

    if (trailing) blocks.push({ type: "text", content: trailing });
  }

  return blocks;
}

export function parseAssistantContent(text) {
  if (!text || text === "...") return [];

  if (text.includes("\n")) {
    return parseMultilineContent(text);
  }

  return parseInlineContent(text);
}

function TextBlock({ content }) {
  const paragraphs = content.split(/\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className={`text-[13px] leading-relaxed text-gray-900 ${i > 0 ? "mt-2" : ""}`}
        >
          <FormattedText text={para} />
        </p>
      ))}
    </>
  );
}

function SectionBlock({ title, items }) {
  return (
    <div className="mt-2 first:mt-0">
      <p className="text-xs font-semibold text-blue-700 mb-1">{title}</p>
      <ul className="space-y-0.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-1.5 text-[13px] text-gray-900 leading-snug"
          >
            <span className="mt-[6px] w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
            <span>
              <FormattedText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ListBlock({ items }) {
  return (
    <ul className="space-y-0.5 mt-1">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-1.5 text-[13px] text-gray-900 leading-snug"
        >
          <span className="mt-[6px] w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
          <span>
            <FormattedText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function MessageContent({ content, isBot }) {
  if (!isBot) {
    return (
      <span className="text-[13px] leading-relaxed text-gray-900 font-medium">
        {content}
      </span>
    );
  }

  const blocks = parseAssistantContent(content);

  if (blocks.length === 0) {
    return (
      <span className="text-[13px] leading-relaxed text-gray-900">
        <FormattedText text={content} />
      </span>
    );
  }

  return (
    <div className="space-y-1">
      {blocks.map((block, i) => {
        if (block.type === "section") {
          return <SectionBlock key={i} title={block.title} items={block.items} />;
        }
        if (block.type === "list") {
          return <ListBlock key={i} items={block.items} />;
        }
        return <TextBlock key={i} content={block.content} />;
      })}
    </div>
  );
}
