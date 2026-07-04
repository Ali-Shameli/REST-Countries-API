import { Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="shadow-sm bg-(--elements)">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <h1 className="text-xl font-extrabold">
          Where in the world?
        </h1>

        <button className="flex cursor-pointer items-center gap-2 font-semibold"
        onClick={() =>
    setTheme(theme === "light" ? "dark" : "light")
}>
          <Moon size={18} />
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;