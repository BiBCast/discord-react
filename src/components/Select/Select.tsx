import { ReactNode, useState } from "react";
import "./index.css";
import { DownArrow } from "../../assets/DownArrow";
import { RightArrow } from "../../assets/RightArrow";
export function Select({ children }: { children: ReactNode }) {
  const [isShow, setIsShow] = useState(true);
  return (
    <section className="select">
      <div className="select__title" onClick={() => setIsShow(!isShow)}>
        {isShow ? <RightArrow /> : <DownArrow />}
        <p>Testo</p>
      </div>
      {isShow && <article>{children}</article>}
    </section>
  );
}
