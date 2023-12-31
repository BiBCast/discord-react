import { useState } from "react";
import { AddUser } from "../../assets/AddUser";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import { IconName } from "../IconName/IconName";
import "./index.css";

export function Option() {
  const [isShow, setIsShow] = useState(false);
  return (
    <section
      className={isShow ? "options__ct hover" : "options__ct"}
      onMouseOver={() => setIsShow(true)}
      onMouseOut={() => setIsShow(false)}
    >
      <IconName />
      {isShow && (
        <ChannelIcons TooltipPosition="Up">
          <AddUser />
          <AddUser />
        </ChannelIcons>
      )}
    </section>
  );
}
