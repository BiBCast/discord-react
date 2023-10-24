import { Glass } from "../../assets/Glass";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
export function Input() {
  return (
    <div className="input">
      <input type="seach" placeholder="Cerca" />
      <ChannelIcons>
        <Glass />
        <></>
      </ChannelIcons>
    </div>
  );
}
