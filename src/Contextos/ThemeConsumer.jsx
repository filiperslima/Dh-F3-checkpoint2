import { useContext } from "react";
import { ThemesContext } from "./ThemesContext";

function ThemeConsumer({ children }) {
    const { themes } = useContext(ThemesContext)
    return (
        <div className={`
        ${themes.card}
        ${themes.icons}
        ${themes.modal}
        ${themes.closeBtn}
        `}>

            {children}

        </div>
    );
}

export default ThemeConsumer;