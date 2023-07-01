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


  it("Deve liberar o botão e realizar o login", async () => {
    // Renderiza o componente LoginForm
    renderContext(<LoginForm />);

    // Obtém os elementos de input
    const loginInput = screen.getByPlaceholderText("Login");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Preenche os campos de input
    fireEvent.change(loginInput, { target: { value: "dentistaAdmin" } });
    fireEvent.change(passwordInput, { target: { value: "admin123" } });

    // Simula o envio do formulário
    fireEvent.click(screen.getByText("Send"));

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
  test('validação incorreta de login e senha', () => {
    renderContext(<LoginForm />);

    // Obter os elementos de input
    const loginInput = screen.getByPlaceholderText('Login');
    const passwordInput = screen.getByPlaceholderText('Password');

    // Preencher os campos com valores inválidos
    fireEvent.change(loginInput, { target: { value: 'user' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });

    // Verificar se o botão de envio está desabilitado
    const submitButton = screen.getByText('Send');
    expect(submitButton).toBeDisabled();
  });
});

