import { useState } from "react";
import { Chat } from "../Chat/Chat";
import { ChatInput } from "../ChatInput/ChatInput";
import { ScrollerNavbar } from "../ScrollerNavbar/ScrollerNavbar";
import "./index.css";
export function ScrollerContent() {
  const [inputs, setInputs] = useState<string[]>([]);
  return (
    <section className="scr_content">
      <ScrollerNavbar />
      <Chat inputs={inputs} />
      <ChatInput setInputs={setInputs} />
    </section>
  );
}
