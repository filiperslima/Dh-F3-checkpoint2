import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "../../../Components/LoginForm";
import { renderContext } from "../../test-utils";



describe("LoginForm", () => {
  
  it("deve realizar o login com sucesso", async () => {
    // Renderiza o componente LoginForm
    renderContext( <LoginForm/>);
    
    // Obtém os elementos de input
    const loginInput = screen.getByPlaceholderText("Login");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Preenche os campos de input
    fireEvent.change(loginInput, { target: { value: "dentistaAdmin" } });
    fireEvent.change(passwordInput, { target: { value: "admin123" } });

    // Simula o envio do formulário
    fireEvent.click(screen.getByText("Send"));
  
    // Verifica se o token foi armazenado no localStorage
    expect(localStorage.getItem("token")).not.toBe(null);


  });
});