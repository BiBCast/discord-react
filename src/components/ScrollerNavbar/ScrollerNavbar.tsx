import { Bell } from "../../assets/Bell";
import { BoxMail } from "../../assets/BoxMail";
import { HashChat } from "../../assets/HashChat";
import { Pin } from "../../assets/Pin";
import { QuestionMark } from "../../assets/QuestionMark";
import { Social } from "../../assets/Social";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import { IconName } from "../IconName/IconName";
import { Input } from "../Input/Input";
import "./index.css";
export function ScrollerNavbar() {
  return (
    <nav className="sr__navbar">
      <IconName />
      <div className="navbar__sep"></div>
      <div className="navbar__title">
        Commenti su Death Battle futuri e pronostici
      </div>
      <ChannelIcons TooltipPosition="Down">
        <HashChat />
        <Bell />
        <Pin />
        <Social />
      </ChannelIcons>
      <Input />
      <ChannelIcons TooltipPosition="Down">
        <BoxMail />
        <QuestionMark />
      </ChannelIcons>
    </nav>
  );
}
