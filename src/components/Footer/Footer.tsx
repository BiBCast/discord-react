import { AddUser } from "../../assets/AddUser";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
export function Footer() {
  return (
    <footer className="title_inline cnSideBar_footer">
      <div className="footer_user">
        <div>icon con pallino</div>
        <div className="user_status">
          <div>nome</div>
          <div>stato</div>
        </div>
      </div>
      <ChannelIcons>
        <AddUser />
        <AddUser />
      </ChannelIcons>
    </footer>
  );
}
