import React from "react";
import { render, screen } from "@testing-library/react";
import Clock from "./index";

describe("Testing clock work", () => {
  test("Renders Clock", () => {
    const { container } = render(<Clock />);
    const timeElement = container.getElementsByClassName("time");
    expect(timeElement.length).toBe(1);
  });
  test("Clock changes with time", async () => {
    render(<Clock />);
    const current = new Date().toLocaleTimeString();
    const timeElement = screen.getByText(current);
    expect(timeElement).toBeInTheDocument();
  });
});
