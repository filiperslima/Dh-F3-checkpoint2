import { useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import useTheme from "../Hooks/useTheme";
import useAuth from "../Hooks/useAuth";
import { useParams } from 'react-router-dom';
import axios from "axios";

const DetailCard = () => {
  const { theme } = useTheme()
  const { hasUser } = useAuth()

  const params = useParams();
  const [dentista, setDentista] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setIsButtonDisabled(!token);
  }, [token]);



  const getDentista = async () => {
    try {
      const response = await axios.get(`https://dhodonto.ctdprojetointegrador.com/dentista?matricula=${params.id}`);
      if (response.status === 200) {
        setDentista([response.data])

      }
    } catch (err) {
      console.log(err)

    }
  }

  useEffect(() => {
    getDentista()

  }, []);

  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      {
        dentista.map(dentista => {
          return (
            <div key={dentista.matricula}>

              <h1>Detail about Dentist {dentista.nome} </h1>
              <section className="card col-sm-12 col-lg-6 container">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
             // está em dark mode e deverá utilizar o css correto */}
                <div
                  className={theme.body ? ` card-body row ${styles.cardDark}` : `card-body row`}
                >
                  <div className="col-sm-12 col-lg-6">
                    <img
                      className="card-img-top"
                      src="/images/doctor.jpg"
                      alt="doctor placeholder"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <ul className="list-group">
                      <li className="list-group-item">Nome: {dentista.nome}</li>
                      <li className="list-group-item">
                        Sobrenome: {dentista.sobrenome}
                      </li>
                      <li className="list-group-item">
                        Usuário: {dentista.usuario.username}
                      </li>
                    </ul>
                    <div className="text-center">
                      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                   // está em dark mode e deverá utilizado o css correto */}
                      <button
                        disabled={isButtonDisabled}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className={`btn btn-${theme.body} ${styles.button
                          }`
                        }
                      >
                        Marcar consulta
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <ScheduleFormModal />

            </div>
          )
        })}

    </>
  );
};

export default DetailCard;
