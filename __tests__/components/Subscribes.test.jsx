import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Subscribes from "@/app/components/Subscribes";
import "intersection-observer";

describe("Subscribe component", () => {
  test("renders subscribe form with correct content", () => {
    render(<Subscribes />);

    // Check if title is rendered
    const titleElement = screen.getByText("Abonnez-vous à la newletter !");
    expect(titleElement).toBeInTheDocument();

    // Check if subtitle is rendered
    const subtitleElement = screen.getByText("Rejoindre la communauté");
    expect(subtitleElement).toBeInTheDocument();

    // Check if description is rendered
    const descriptionElement = screen.getByText(
      "Rejoignez notre communauté d'abonnés aujourd'hui et restez connecté avec tous les développements passionnants",
    );
    expect(descriptionElement).toBeInTheDocument();

    // Check if email input field is rendered
    const emailInput = screen.getByPlaceholderText("Enter your Email");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");

    // Check if submit button is rendered
    const submitButton = screen.getByRole("button", { type: "submit" });
    expect(submitButton).toBeInTheDocument();
  });

  // test("soumet l'e-mail lorsque le formulaire est rempli et soumis", () => {
  //   // Remplace la fonction de soumission réelle par la fonction mock avant de rendre le composant
  //   const mockSubmit = jest.fn();
  //   HTMLFormElement.prototype.submit = mockSubmit;

  //   render(<Subscribes />);

  //   // Remplir le champ de saisie de l'e-mail
  //   const emailInput = screen.getByPlaceholderText("Entrez votre e-mail");
  //   userEvent.type(emailInput, "test@example.com");

  //   // Soumettre le formulaire
  //   const submitButton = screen.getByRole("button", { type: "submit" });
  //   userEvent.click(submitButton);

  //   // Vérifier si le formulaire est soumis avec le bon e-mail
  //   expect(mockSubmit).toHaveBeenCalledTimes(1);
  //   expect(mockSubmit.mock.calls[0][0].target[0].value).toBe(
  //     "test@example.com",
  //   );
  // });
});
