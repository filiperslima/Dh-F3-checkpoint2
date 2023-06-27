
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemesContext, themes } from "./Contextos/ThemesContext"
import ThemeConsumer from "./Contextos/ThemeConsumer";
import { useState, useContext, Fragment } from "react";

function App() {

  const [theme, setTheme] = useState(themes.lightTheme);

  const handleChangeTheme = () => {
    console.log("Filho disparou a função que troca o tema e o tema atual é " + `${theme.body}`);
    theme == themes.darkTheme ? setTheme(themes.lightTheme) : setTheme(themes.darkTheme);
  };

  return (
    < div className={`app ${theme.body}`}>
      <ThemesContext.Provider value={{ theme, handleChangeTheme }}>

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
