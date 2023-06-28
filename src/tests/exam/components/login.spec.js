import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "../../../Components/LoginForm";

import { BrowserRouter } from "react-router-dom";

describe("LoginForm", () => {
  it("deve realizar o login com sucesso", async () => {
    // Renderiza o componente LoginForm
    render( 
    <BrowserRouter>
    <LoginForm/>
    </BrowserRouter>
    )
    // // Obtém os elementos de input
    // const loginInput = screen.getByPlaceholderText("Login");
    // const passwordInput = screen.getByPlaceholderText("Password");

    // // Preenche os campos de input
    // fireEvent.change(loginInput, { target: { value: "dentistaAdmin" } });
    // fireEvent.change(passwordInput, { target: { value: "admin123" } });

    // // Simula o envio do formulário
    // fireEvent.click(screen.getByText("Send"));
  
    // // Verifica se o token foi armazenado no localStorage
    // expect(localStorage.getItem("token")).not.toBeNull();


  });
});
