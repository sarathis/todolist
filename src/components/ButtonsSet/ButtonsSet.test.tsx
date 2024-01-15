import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ButtonsSet from "./ButtonsSet";
const completeFunction = jest.fn;
const deleteFunction = jest.fn;

test("Should render component", () => {
  render(
    <ButtonsSet onComplete={completeFunction} onDelete={deleteFunction} />
  );
  const item = screen.findByTestId("comp-buttons");
  expect(item).toBeDefined();
});

test("Should render complete button", () => {
  render(
    <ButtonsSet onComplete={completeFunction} onDelete={deleteFunction} />
  );
  const item = screen.findByTestId("btn-complete");
  expect(item).toBeDefined();
});

test("Should render delete button", () => {
  render(
    <ButtonsSet onComplete={completeFunction} onDelete={deleteFunction} />
  );
  const item = screen.findByTestId("btn-delete");
  expect(item).toBeDefined();
});
