import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <div style={{background: theme === "light"? "black" : "white" , color: theme === "light" ? "white" : "black", padding: "20px" }}>
            <h1>Tema: {theme}</h1>
            <button onClick={toggleTheme}>Temani deyis</button>
        </div>
    )
}export default ThemeSwitcher;