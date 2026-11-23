import { useRef, useEffect } from "react";

export default function useAutoScroll(messages, isTyping) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return bottomRef;
}