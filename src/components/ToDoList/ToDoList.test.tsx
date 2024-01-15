import React from "react";
import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";

test("Should render component", () => {
  render(
   <ToDoList setSelectedIds={function (arg0: number[]): unknown {
      throw new Error("Function not implemented.");
    } } onComplete={function (): void {
      throw new Error("Function not implemented.");
    } } onDelete={function (): void {
      throw new Error("Function not implemented.");
    } } source={[]}/>
  );
  const item = screen.findByTestId("buttons-set-comp");
  expect(item).toBeDefined();
});