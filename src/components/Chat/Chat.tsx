import { useRef, useEffect } from "react";
import "./index.css";
export function Chat({ inputs }: { inputs: string[] }) {
  const bottomEl = useRef(null);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: "auto" });
  };
  useEffect(scrollToBottom, [inputs]);
  return (
    <article className="chat">
      <div className="chat__space"></div>
      {inputs.slice(0).map((e, index) => (
        <div key={index} className="chat__input">
          {e}
        </div>
      ))}
      <div ref={bottomEl}></div>
    </article>
  );
}
