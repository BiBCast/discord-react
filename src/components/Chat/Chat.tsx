import { useRef, useEffect } from "react";
import "./index.css";
import { Icon } from "../Icon/Icon";
import { DateTime } from "../DateTime/DateTime";
export function Chat({ inputs }: { inputs: string[] }) {
  const bottomEl = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView();
  };

  useEffect(scrollToBottom, [inputs.length]);
  return (
    <article className="chat">
      <div className="chat__space"></div>
      {inputs.map((e, index) => (
        <div key={index} className="chat__input">
          <Icon />
          <div>
            <div className="chat__name_data">
              <p>Pietro</p>
              <DateTime />
            </div>
            <div className="chat__text">{e}</div>
          </div>
        </div>
      ))}
      <div ref={bottomEl}></div>
    </article>
  );
}
