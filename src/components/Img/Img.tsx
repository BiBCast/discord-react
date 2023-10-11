import { Dispatch, SetStateAction } from "react";
import "./index.css";
export function Img({
  URL,
  setIsImageHover,
}: {
  URL: string;
  setIsImageHover: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <img
        src={window.location.href + URL}
        alt=" "
        width="48"
        height="48"
        onMouseOver={() => setIsImageHover(true)}
        onMouseOut={() => setIsImageHover(false)}
      />
    </>
  );
}
