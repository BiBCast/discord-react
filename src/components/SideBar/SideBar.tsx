import { Icon } from "../Icon/Icon";
import { Icons } from "../Icons/Icons";
import "./index.css";
export function SideBar() {
  return (
    <aside className="Sidebar">
      <div className="sidebar__icon">
        <Icon />
      </div>
      <div className="separator"></div>
      <Icons />
    </aside>
  );
}
