import { Footer } from "../Footer/Footer";
import { Options } from "../Options/Options";
import { Select } from "../Select/Select";
import { Title } from "../Title/Title";
import "./index.css";
export function ChannelSideBar() {
  return (
    <aside className="cn__sidebar">
      <nav>
        <Title title="Channel Gemerico" />
        <section className="cn__body">
          <Select>
            <Options />
          </Select>
        </section>
      </nav>
      <Footer />
    </aside>
  );
}
