import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  render(<App />);
  const text = screen.getByText(/Create-react-app TailwindCSS Starter/i);
  expect(text).toBeInTheDocument();
});
