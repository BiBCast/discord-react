import { Icon } from "../Icon/Icon";
import { Icons } from "../Icons/Icons";
import "./index.css";
export function SideBar() {
  return (
    <aside>
      <Icon />
      <div className="separator"></div>
      <Icons />
    </aside>
  );
}
