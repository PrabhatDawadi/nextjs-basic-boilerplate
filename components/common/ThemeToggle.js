import { useEffect, useState } from "react";

const ThemeToggle = () => {

    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    return (
        <div className="theme-selector b-r-10" onClick={() => setActiveTheme(inactiveTheme)}>
            <div className="in b-r-10">Click to Switch to {`${inactiveTheme}`} Theme</div>
        </div>
    );
};

export default ThemeToggle;