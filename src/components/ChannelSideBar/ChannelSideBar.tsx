import { Options } from "../Options/Options";
import { Select } from "../Select/Select";
import "./index.css";
export function ChannelSideBar() {
  return (
    <aside className="cn__sidebar">
      <nav>
        <div className="cn__title">
          <p>Channel discord generico</p>
        </div>
        <section className="cn__body">
          <Select>
            <Options />
          </Select>
        </section>
      </nav>
      <footer>footer</footer>
    </aside>
  );
}
