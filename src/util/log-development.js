
export default function log(v) {
  console.log.apply(console, arguments);
  return v;
}
