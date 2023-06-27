import { useContext } from "react";
import { ThemesContext } from "./ThemesContext";

function ThemeConsumer({ children }) {
    const {theme} = useContext(ThemesContext)

    return (
        <div>

            {children}

        </div>
    );
}

export default ThemeConsumer;