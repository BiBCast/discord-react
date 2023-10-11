import { useState } from "react";
import { Img } from "../Img/Img";
import "./index.css";
export function Icon() {
  const [isImageHover, setIsImageHover] = useState(false);
  return (
    <article className="icon">
      <div className="icon__container">
        <Img URL="/ChannelIcon1.webp" setIsImageHover={setIsImageHover} />
        <div
          className={
            isImageHover ? "container__hover show" : "container__hover"
          }
        ></div>
      </div>
    </article>
  );
}
