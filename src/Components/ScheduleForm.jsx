import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ScheduleForm.module.css";

const ScheduleForm = () => {
  const [dentistas, setDentistas] = useState([])
  const [pacientes, setPacientes] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(" https://dhodonto.ctdprojetointegrador.com/dentista", {
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (response.status === 200) {
          setDentistas(response.data)
        }
      } catch (err) {
        console.log(err)

      }
    }
    const getDataPaciente = async () => {
      try {
        const response = await axios.get(" https://dhodonto.ctdprojetointegrador.com/paciente", {
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (response.status === 200) {
          setPacientes(response.data.body)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getDataPaciente()
    getData()


  }, []);

  useEffect(() => {

  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault()
    const { dentist, patient, appointmentDate } = event.target;
    const token = localStorage.getItem("token");
    console.log(dentist.value, patient.value, appointmentDate.value, token)
    const body = {
      paciente: {
        matricula: patient.value
      },
      dentista: {
        matricula: dentist.value
      },
      dataHoraAgendamento: appointmentDate.value
    }
    try {
      const response = await axios.post("https://dhodonto.ctdprojetointegrador.com/consulta", body, {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      });
      if(response.status === 200||201){
        alert("Consulta agendada com sucesso")
        navigate("/")
      } else if (response.status === 403){
        alert("Token espirado. Por favor, logar novamente.")
        localStorage.removeItem("token")
        navigate("/login")
      } else if( response.status === 400){
        alert("Ocorreu um erro ao tentar realizar o agendamento!")
      }
      console.log(response.status)
      
      
    

    }
    catch {

    }

    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                {dentistas.map(dado => {
                  return (
                    <option key={dado.matricula} value={dado.matricula}>
                      {dado.sobrenome}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient">
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {pacientes.map(dado => {
                  return (
                    <option key={dado.matricula} value={dado.matricula}>
                      {dado.sobrenome}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
