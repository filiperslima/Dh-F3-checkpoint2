import { createContext } from "react";

const themes = {
    darkTheme: {
        closeBtn: "closeButtonDark",
        modal: "DarkModal",
        icons: "iconsDark",
        card: "cardDark",
        body: "dark"
    },
    lightTheme: {
        closeBtn: "",
        modal: "",
        icons: "",
        card: "",
        body: "light"


    }
}

const ThemesContext = createContext(themes.darkTheme)
export {themes, ThemesContext};