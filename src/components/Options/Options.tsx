import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import { IconName } from "../IconName/IconName";
import "./index.css";
export function Options() {
  return (
    <>
      <div className="options__ct">
        <IconName />
        <ChannelIcons />
      </div>
      <div className="options__ct">
        <IconName />
        <ChannelIcons />
      </div>
      <div className="options__ct">
        <IconName />
        <ChannelIcons />
      </div>
      <div className="options__ct">
        <IconName />
        <ChannelIcons />
      </div>
    </>
  );
}
