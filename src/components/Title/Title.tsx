import "./index.css";
export function Title({ title }: { title: string }) {
  return (
    <section className="cn__title title_inline">
      <p>{title}</p>
    </section>
  );
}
