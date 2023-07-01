import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "../../../Components/LoginForm";
import { renderContext } from "../../test-utils";



describe("LoginForm", () => {
  let mockAlert;

  beforeEach(() => {
    mockAlert = jest.spyOn(window, 'alert').mockImplementation(jest.fn());
  });

  afterEach(() => {
    mockAlert.mockRestore();
  });

  it("deve realizar o login com sucesso", async () => {
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

    // Aguarde a resposta da chamada
    // await screen.findByText('Login bem sucedido');

    // Verifique se o alerta "Login bem sucedido" foi exibido
    // expect(window.alert).toHaveBeenCalledWith('Login bem sucedido');
    expect(mockAlert).toHaveBeenCalledWith(expect.stringContaining('Login bem sucedido'));

  });
});




