import { ChannelSideBar } from "../ChannelSideBar/ChannelSideBar";
import { ScrollerContent } from "../ScrollerContent/ScrollerContent";
import "./index.css";
export function Channel() {
  return (
    <section className="channel">
      <ChannelSideBar />
      <ScrollerContent />
    </section>
  );
}
