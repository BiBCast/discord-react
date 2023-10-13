import { useState } from "react";
import { HeadPhones } from "../../assets/HeadPhones";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
export function Footer() {
  const [isHover, setIsHover] = useState(false);
  return (
    <footer className="cnSideBar_footer">
      <div
        className="footer_user"
        onMouseOut={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
      >
        <div>
          <img src="/ChannelIcon1.webp" alt="" />
        </div>
        <div className="user_status">
          <h3>BiBCast</h3>
          <div className={isHover ? "status status_hover" : "status"}>
            <p>Online</p>
            <p className="footer_hover">bibcastbib</p>
          </div>
        </div>
      </div>
      <ChannelIcons>
        <HeadPhones />
        <HeadPhones />
      </ChannelIcons>
    </footer>
  );
}
