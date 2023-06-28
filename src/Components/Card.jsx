// import { useContext } from "react";
// import { ThemesContext } from "../Contextos/ThemesContext";
import useTheme from "../Hooks/useTheme";
import styles from "./Card.module.css";

const Card = ({dentista}) => {
  const {theme} = useTheme()
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`${theme.card}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`${theme.body}  ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <a href={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{dentista.nome} {dentista.sobrenome}</h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
