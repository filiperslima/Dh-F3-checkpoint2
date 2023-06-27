import { createContext } from "react";

const themes = {
    darkTheme: {
        closeBtn: "closeButtonDark",
        modal: "DarkModal",
        icons: "iconsDark",
        card: "cardDark"
    },
    lightTheme: {
        closeBtn: "",
        modal: "",
        icons: "",
        card: ""

    }
}

const ThemesContext = createContext(themes.darkTheme)
export {themes, ThemesContext};