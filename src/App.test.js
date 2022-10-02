import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  const { container } = render(<App />);
  const appClass = container.getElementsByClassName("App");
  expect(appClass.length).toBe(1);
});
