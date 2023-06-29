import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "../../../Components/Navbar";
import { renderContext } from "../../test-utils";


describe("Navbar", () => {

    it("trocar de tema bem sucedida", async () => {
        // Renderiza o componente LoginForm
        renderContext(<Navbar />);

        


        // Obtém os botoes de theme
        const lightThemeBtn = screen.getByText("☀");
        
        // Obtém o botão de tema escuro usando uma função de correspondência personalizada
        const darkThemeBtn = screen.queryByText("🌙");
        
      

        // Simula o clique nos botões
        fireEvent.click(lightThemeBtn);
        setTimeout(() => {
            fireEvent.click(darkThemeBtn);
          }, 2000);

       
        

    });
});
