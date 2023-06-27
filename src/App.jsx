
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemesContext, themes } from "./Contextos/ThemesContext"
// import ThemeConsumer from "./contexts/ThemeConsumer";
import { useState, useContext, Fragment } from "react";

function App() {

  const { themes } = useContext(ThemesContext)
  // const [theme, setTheme] = useState(themes.darkTheme);

  // const handleChangeTheme = () => {
  //   console.log("Filho disparou a função que troca o tema");
  //   theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  // };

  return (

    <ThemesContext.Provider value={themes}>

      < div className={`
      ${themes.card}
      ${themes.icons}
      ${themes.modal}
      ${themes.closeBtn}
        `}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />

      </div >

    </ThemesContext.Provider>





  );
}

export default App;
    // Na linha seguinte deverá ser feito um teste se a aplicação
    //      está em dark mode e deverá utilizar a classe dark ou light
