import "./index.css";
export function Chat({ inputs }: { inputs: string[] }) {
  return (
    <article className="chat">
      <div className="chat__space"></div>
      {inputs.map((e, index) => (
        <div key={index} className="chat__input">
          {e}
        </div>
      ))}
    </article>
  );
}
