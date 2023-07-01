import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({})
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
function ThemesContextProvider({ children }) {
    const [theme, setTheme] = useState(themes.darkTheme);

    const handleChangeTheme = () => {
        theme === themes.lightTheme ? setTheme(themes.darkTheme) : setTheme(themes.lightTheme);
    };
    useEffect(() => {
        const actualTheme = localStorage.getItem('theme')
        if (actualTheme) {
            const themeConverted = JSON.parse(actualTheme)
            setTheme(themeConverted)
        }

    }, [])
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>{children}</ThemeContext.Provider>
    );
}

export default ThemesContextProvider;