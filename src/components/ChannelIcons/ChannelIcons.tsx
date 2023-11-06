import { ReactNode } from "react";
import "./index.css";
import { HoverMsg } from "../HoverMsg.tsx/HoverMsg";
export function ChannelIcons({
  children,
  TooltipPosition,
}: {
  children: ReactNode[];
  TooltipPosition: string;
}) {
  return (
    <div className="cn__icons">
      {children?.map((child, index) => {
        return (
          <div className="cn__icon" key={index}>
            {child}
            <HoverMsg position={TooltipPosition} />
          </div>
        );
      })}
    </div>
  );
}
