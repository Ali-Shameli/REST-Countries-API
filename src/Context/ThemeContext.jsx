import { useEffect, useState ,createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
    document.documentElement.classList.toggle(
        "dark",
        theme === "dark"
    );

    localStorage.setItem("theme", theme);

}, [theme]);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext };
export default ThemeProvider;