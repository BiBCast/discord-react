import { useState } from "react";
import { Img } from "../Img/Img";
import "./index.css";
export function Icon({ hasHover }: { hasHover: boolean }) {
  const [isImageHover, setIsImageHover] = useState(false);
  return (
    <article className="icon">
      <Img URL="/ChannelIcon1.webp" setIsImageHover={setIsImageHover} />
      {hasHover && (
        <div
          className={
            isImageHover ? "container__hover show" : "container__hover"
          }
        ></div>
      )}
    </article>
  );
}
