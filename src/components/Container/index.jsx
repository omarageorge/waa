export default function index({ children, style }) {
  return <div className={`container mx-auto px-10 ${style}`}>{children}</div>;
}
