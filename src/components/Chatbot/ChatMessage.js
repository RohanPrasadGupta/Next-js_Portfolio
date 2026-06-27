import { motion } from "framer-motion";
import MessageContent from "./MessageContent";

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-blue-500"
          animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function ChatMessage({ message }) {
  const isBot = message.role === "assistant";
  const isTyping = isBot && message.content === "...";
  const hasStructuredContent =
    isBot && !isTyping && message.content.includes("**");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3 gap-2`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 mt-1 shadow-sm ring-2 ring-blue-100">
          R
        </div>
      )}

      <div
        className={`${
          hasStructuredContent ? "max-w-[88%]" : "max-w-[80%]"
        } px-3.5 py-2.5 ${
          isBot
            ? "bg-gray-50 text-gray-900 rounded-2xl rounded-tl-sm border border-gray-200 shadow-sm"
            : "bg-blue-50 text-gray-900 rounded-2xl rounded-tr-sm border border-blue-200 shadow-sm"
        }`}
      >
        {isTyping ? (
          <TypingIndicator />
        ) : (
          <MessageContent content={message.content} isBot={isBot} />
        )}
      </div>
    </motion.div>
  );
}
