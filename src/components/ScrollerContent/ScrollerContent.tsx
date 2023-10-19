import { Chat } from "../Chat/Chat";
import { ScrollerNavbar } from "../ScrollerNavbar/ScrollerNavbar";
import "./index.css";
export function ScrollerContent() {
  return (
    <section className="scr_content">
      <ScrollerNavbar />
      <Chat />
    </section>
  );
}
