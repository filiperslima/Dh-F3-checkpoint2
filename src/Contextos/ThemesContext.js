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
        card: "card",
        body: "light"


    }
}

const ThemesContext = createContext(themes.lightTheme)
export {themes, ThemesContext};