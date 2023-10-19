import { Chat } from "../Chat/Chat";
import { ChatInput } from "../ChatInput/ChatInput";
import { ScrollerNavbar } from "../ScrollerNavbar/ScrollerNavbar";
import "./index.css";
export function ScrollerContent() {
  return (
    <section className="scr_content">
      <ScrollerNavbar />
      <Chat />
      <ChatInput />
    </section>
  );
}
