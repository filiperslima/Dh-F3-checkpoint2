import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import { ThemesContext, themes } from "./Contextos/ThemesContext"
// import { useState, useEffect } from "react";
import AuthContextProvider from "./Contextos/AuthContextProvider";
import ThemesContextProvider from "./Contextos/ThemeContextProvider";
// import ThemesContextProvide from "./Contextos/ThemeContextProvider";
import ThemeContextProvider from "./Contextos/ThemeContextProvider";
import useTheme from "./Hooks/useTheme";


function App() {
  const { theme } = useTheme();
  // const [theme, setTheme] = useState(themes.lightTheme);

  // const handleChangeTheme = () => {
  //   theme === themes.lightTheme ? setTheme(themes.darkTheme) : setTheme(themes.lightTheme);

  // };
  // useEffect(() => {
  //   const actualTheme = localStorage.getItem('theme')
  //   if (actualTheme) {
  //     const themeConverted = JSON.parse(actualTheme)
  //     setTheme(themeConverted)
  //   }

  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('theme', JSON.stringify(theme))
  // }, [theme])

  return (
      < div className={`app ${theme.body}`}>
        <AuthContextProvider>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </AuthContextProvider>
      </div >
  );
}

export default App;
    // Na linha seguinte deverá ser feito um teste se a aplicação
    //      está em dark mode e deverá utilizar a classe dark ou light
