import "./index.css";
export function HoverMsg({ position }: { position: string }) {
  const Up = position === "Up" ? " Up " : "";
  const Down = position === "Down" ? " Down  " : "";
  const Right = position === "Right" ? " Right " : "";

  return (
    <div className={"icon__hover_msg " + Up + Down + Right}>
      <p>Impostazioni delle notifiche</p>
    </div>
  );
}
