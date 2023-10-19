import { HeadPhones } from "../../assets/HeadPhones";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
export function ChatInput() {
  return (
    <article className="ChatInput">
      <div className="ChatInput__ct">
        <div className="ct__input">
          <ChannelIcons>
            <HeadPhones />
            <></>
          </ChannelIcons>
          <input type="text" placeholder="Canale" />
        </div>
        <ChannelIcons>
          <HeadPhones />
          <HeadPhones />
          <HeadPhones />
          <HeadPhones />
        </ChannelIcons>
      </div>
    </article>
  );
}
