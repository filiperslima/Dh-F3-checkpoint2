import React from "react";
import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [dentistas, setDentistas] = useState([])

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
    getData()

    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {
          dentistas.map((dentista) => { return <Card dentista={dentista} key={dentista.matricula} /> })
        }
      </div>
    </>
  );
};

export default Home;
