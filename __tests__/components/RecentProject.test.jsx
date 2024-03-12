const React = require("react");
const { render, fireEvent } = require("@testing-library/react");
const RecentProject = require("@/app/components/RecentProject").default;

jest.mock("swiper/css"); // Ignore Swiper CSS

// Test de rendu initial
test("renders RecentProject component", () => {
  const { getByText, getByAltText } = render(<RecentProject />);
  expect(getByText("Les Projet")).toBeInTheDocument();
  expect(getByText("Experiences")).toBeInTheDocument();
  expect(getByAltText("Jeremy Prat")).toBeInTheDocument();
});

// Test de navigation
test("navigation works correctly", () => {
  const { getByTestId } = render(<RecentProject />);
  const prevButton = getByTestId("prev-button");
  const nextButton = getByTestId("next-button");

  fireEvent.click(nextButton);
  // Vous pouvez vérifier si la diapositive a changé ici

  fireEvent.click(prevButton);
  // Vérifiez si la diapositive a changé en arrière
});

// Test de pagination
test("pagination works correctly", () => {
  const { getByTestId } = render(<RecentProject />);
  const prevButton = getByTestId("prev-button");
  const nextButton = getByTestId("next-button");

  // Assurez-vous que le bouton précédent est désactivé initialement
  expect(prevButton).toBeDisabled();

  // Cliquez sur le bouton suivant plusieurs fois jusqu'à atteindre la dernière diapositive
  fireEvent.click(nextButton);
  fireEvent.click(nextButton);
  // Ajoutez autant de clics que nécessaire pour atteindre la dernière diapositive

  // Assurez-vous que le bouton suivant est désactivé une fois que vous atteignez la dernière diapositive
  expect(nextButton).toBeDisabled();
});

// Test de visibilité des éléments animés
test("animated elements are visible", async () => {
  const { findByText } = render(<RecentProject />);
  const subTitle = await findByText("Experiences");
  const title = await findByText("Les Projet");
  expect(subTitle).toBeVisible();
  expect(title).toBeVisible();
});

// Test de chargement d'image
test("images load correctly", async () => {
  const { findByAltText } = render(<RecentProject />);
  const image = await findByAltText("Jeremy Prat");
  expect(image).toBeVisible();
});

// Test de la structure HTML générée
test("generated HTML structure is correct", () => {
  const { container } = render(<RecentProject />);
  // Ajoutez des assertions pour vérifier la structure HTML générée
});
