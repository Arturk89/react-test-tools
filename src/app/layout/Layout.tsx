import "./style.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className="appLayout">{children}</div>;
}
