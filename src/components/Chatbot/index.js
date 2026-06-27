import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";

const SUGGESTED_QUESTIONS = [
  "What is Rohan's tech stack?",
  "Tell me about VirtualSOC-LLM",
  "What certifications does he have?",
  "Where does Rohan work currently?",
];

const CHATBOT_URL = process.env.NEXT_PUBLIC_CHATBOT_URL;

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

let messageIdCounter = 0;
const createMessageId = () => {
  messageIdCounter += 1;
  return messageIdCounter;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: createMessageId(),
      role: "assistant",
      content:
        "👋 Hi! I'm Rohan's AI assistant. Ask me anything about his skills, experience, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      fetch(`${CHATBOT_URL}/health`).catch(() => {});
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (question) => {
    const userMessage = question || input.trim();
    if (!userMessage || isLoading) return;

    const assistantId = createMessageId();

    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: createMessageId(), role: "user", content: userMessage },
      { id: assistantId, role: "assistant", content: "..." },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch(`${CHATBOT_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      const answer =
        data.answer ?? data.response ?? data.message ?? "No response received.";

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId ? { ...msg, content: answer } : msg
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "Sorry, I'm having trouble connecting. Please try again in a moment.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-24 right-4 w-[min(340px,calc(100vw-2rem))] h-[min(480px,calc(100vh-7rem))] bg-white backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-900/20 flex flex-col z-50 border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-blue-600 text-white px-4 py-3.5 flex items-center justify-between flex-shrink-0">
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-sm">
                    R
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm tracking-wide text-white">
                    Rohan&apos;s Assistant
                  </p>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    Online — ask me anything
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative p-1.5 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 scroll-smooth bg-white">
              <div className="space-y-1">
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))}
              </div>

              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mt-2 pl-9"
                >
                  <p className="text-xs text-gray-400 mb-2.5 font-medium uppercase tracking-wider">
                    Quick questions
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <motion.button
                        key={q}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        onClick={() => sendMessage(q)}
                        className="group text-left text-xs text-gray-600 bg-gradient-to-r from-green-50 to-blue-50 border border-gray-100 rounded-xl px-3.5 py-2.5 hover:border-blue-200 hover:shadow-sm hover:from-green-100 hover:to-blue-100 transition-all duration-200"
                      >
                        <span className="group-hover:text-blue-600 transition-colors duration-200">
                          {q}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3.5 border-t border-gray-100/80 bg-gray-50/50 flex-shrink-0">
              <div className="flex gap-2 items-end">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about Rohan..."
                    disabled={isLoading}
                    className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-2xl px-4 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:opacity-50 transition-all duration-200 placeholder:text-gray-400"
                  />
                </div>
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white rounded-2xl w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-700 disabled:opacity-40 disabled:shadow-none flex-shrink-0 transition-colors duration-200"
                  aria-label="Send message"
                >
                  <SendIcon />
                </motion.button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                Powered by AI · Responses may vary
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full bg-blue-400"
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center z-10 hover:bg-blue-700 transition-colors"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CloseIcon />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChatIcon />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
