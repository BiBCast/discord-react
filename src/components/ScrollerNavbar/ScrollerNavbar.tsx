import { HeadPhones } from "../../assets/HeadPhones";
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
      <ChannelIcons>
        <HeadPhones />
        <HeadPhones />
        <HeadPhones />
        <HeadPhones />
      </ChannelIcons>
      <Input />
      <ChannelIcons>
        <HeadPhones />
        <HeadPhones />
      </ChannelIcons>
    </nav>
  );
}
