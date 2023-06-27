import styles from "./Form.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dhodonto.ctdprojetointegrador.com/auth', {
        username,
        password
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/home")
        alert("Login bem sucedido");
      }else{
        alert("Erro ao logar")
      }
        
    } catch (error) {
      alert("Verifique suas informações novamente");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const validateForm = () => {
    return username.length >= 5 && password.length >= 5;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [username, password]);

  return (
    <div className={`text-center card container ${styles.card}`}>
      <div className={`card-body ${styles.CardBody}`}>
        <form onSubmit={handleSubmit}>
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Login"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={isButtonDisabled} >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

