import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="border px-3 py-1 rounded text-yellow-500 border-yellow-500"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;