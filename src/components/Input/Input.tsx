import { HeadPhones } from "../../assets/HeadPhones";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
export function Input() {
  return (
    <div className="input">
      <input type="seach" />
      <ChannelIcons>
        <HeadPhones />
        <></>
      </ChannelIcons>
    </div>
  );
}
