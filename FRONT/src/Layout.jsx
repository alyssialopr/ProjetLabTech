import { useFontSize } from "./components/FontSizeContext";

export default function Layout({ children }) {
  const { fontSize } = useFontSize();

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      {children}
    </div>
  );
}
