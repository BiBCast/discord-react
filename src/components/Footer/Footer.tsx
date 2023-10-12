import { HeadPhones } from "../../assets/HeadPhones";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
export function Footer() {
  return (
    <footer className="cnSideBar_footer">
      <div className="footer_user">
        <div>
          <img src="/ChannelIcon1.webp" alt="" />
        </div>
        <div className="user_status">
          <h3>BiBCast</h3>
          <p>Online</p>
        </div>
      </div>
      <ChannelIcons>
        <HeadPhones />
        <HeadPhones />
      </ChannelIcons>
    </footer>
  );
}
