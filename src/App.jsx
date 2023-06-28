import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemesContext, themes } from "./Contextos/ThemesContext"
import { useState, useEffect } from "react";
import { createContext } from "react";

function App() {
  const usuarioLogado = createContext(false);
  const [theme, setTheme] = useState(themes.lightTheme);

  const handleChangeTheme = () => {
    console.log("Filho disparou a função que troca o tema e o tema atual é " + `${theme.body}`);
    theme === themes.lightTheme ? setTheme(themes.darkTheme) : setTheme(themes.lightTheme);
    
  };
  useEffect(() => {
    const actualTheme = localStorage.getItem('theme')
    if(actualTheme) {
      const themeConverted = JSON.parse(actualTheme)
      setTheme(themeConverted)
    }
    
  },[])
  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(theme))
  },[theme])

  return (
    < div className={`app ${theme.body}`}>
      <ThemesContext.Provider value={{ theme, handleChangeTheme, usuarioLogado }}>

        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />

      </ThemesContext.Provider>
    </div >







  );
}

export default App;
    // Na linha seguinte deverá ser feito um teste se a aplicação
    //      está em dark mode e deverá utilizar a classe dark ou light
