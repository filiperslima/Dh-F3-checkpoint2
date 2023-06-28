import { useContext } from "react";
import { ThemesContext } from "../Contextos/ThemesContext";
import useTheme from "../Hooks/useTheme";
import styles from "./Footer.module.css";

const Footer = () => {
  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Voltar para o topo</button>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
        <div className={`navbar-${theme.body} bg-${theme.body} ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              <div className={`col-sm-12 col-lg-6`}>
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                <img className={theme.body === "dark" ? `${styles.dhLogo} ${styles.iconsDark}` : `${styles.dhLogo}`} src="/images/DH.png" alt='DH-logo' />
              </div>
              <div className={theme.body === "dark" ? `col-sm-12 col-lg-6 ${styles.icons}` : `col-sm-12 col-lg-6 ${styles.icons} ${styles.iconsDark} `}>
                <img src="/images/ico-facebook.png" alt="ícone do facebook" className={`${styles.icon} ${theme.icons}  `} />
                <img src="/images/ico-instagram.png" alt="ícone do instagram" className={styles.icon} />
                <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className={styles.icon} />
                <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer