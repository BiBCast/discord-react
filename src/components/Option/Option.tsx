import { useState } from "react";
import { AddUser } from "../../assets/AddUser";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import { IconName } from "../IconName/IconName";
import "./index.css";

export function Option() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="options__ct"
      onMouseOver={() => setIsShow(true)}
      onMouseOut={() => setIsShow(false)}
    >
      <IconName />
      {isShow && (
        <ChannelIcons>
          <AddUser />
          <AddUser />
        </ChannelIcons>
      )}
    </div>
  );
}
