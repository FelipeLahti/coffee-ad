import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { unmountComponentAtNode } from "react-dom";

let adContainer;

describe("App", () => {
  beforeEach(() => {
    adContainer = document.createElement("div");
    adContainer.setAttribute("id", "adBanner");
    document.body.appendChild(adContainer);
  });

  afterEach(() => {
    unmountComponentAtNode(adContainer);
    adContainer.remove();
    adContainer = null;
  });

  test("when clicking on coffee should highlight all coffee words to green color and open an ad", () => {
    render(<App />);
    const coffeeLink = screen.getAllByText(/coffee/i)[0];
    const espressoLink = screen.getAllByText(/espresso/i)[0];

    userEvent.click(coffeeLink);

    expect(coffeeLink).toHaveStyle({ color: "green" });
    expect(espressoLink).toHaveStyle({ color: "#61dafb" });

    screen.getByText("Love coffee?");
    expect(screen.getByText("Buy Coffee Now")).toHaveAttribute(
      "href",
      "https://www.google.com/search?q=coffee"
    );
  });
});
