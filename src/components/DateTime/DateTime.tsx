import "./index.css";
export function DateTime() {
  const now = new Date();
  return (
    <div className="Datetime">
      <div>
        {now.toLocaleDateString("it-IT", {
          hour12: false,
        })}
      </div>
      <div>
        {now.toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  );
}
