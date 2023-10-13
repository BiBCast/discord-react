import { ReactNode } from "react";
import "./index.css";
export function ChannelIcons({ children }: { children: ReactNode[] }) {
  return (
    <div className="cn__icons">
      {children?.map((child, index) => {
        return (
          <div className="cn__icon" key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
