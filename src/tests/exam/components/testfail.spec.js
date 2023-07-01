import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import LoginForm from "../../../Components/LoginForm";
import { renderContext } from "../../test-utils";
import axios from 'axios';



describe("LoginForm", () => {
  let mockAlert;

  beforeEach(() => {
    mockAlert = jest.spyOn(window, 'alert').mockImplementation(jest.fn());
  });

  afterEach(() => {
    mockAlert.mockRestore();
  });


  it("Deve solicitar verificação das informações de login", async () => {
    // Renderiza o componente LoginForm
    
    renderContext(<LoginForm />);

    // Obtém os elementos de input
    const loginInput = screen.getByPlaceholderText("Login");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Preenche os campos de input
    fireEvent.change(loginInput, { target: { value: "usuarioQualquer" } });
    fireEvent.change(passwordInput, { target: { value: "senhaQualquer" } });

    // Simula o envio do formulário
    fireEvent.click(screen.getByText("Send"));

    await waitFor(() => { expect(mockAlert).toHaveBeenCalledWith(expect.stringContaining('Verifique suas informações novamente')) })

  });
});

