export function ImageWrapper({ URL }: { URL: string }) {
  return (
    <img src={window.location.href + URL} alt=" " width="48" height="48" />
  );
}
