import React from "react";
import { render, screen, cleanup,fireEvent } from "@testing-library/react";
import NewToDoItem from "./NewToDoItem";

describe("Home Component", () => {


  afterAll(() => {
    cleanup();
  });
  beforeEach(()=>{
    const setItemName = jest.fn();

    render(<NewToDoItem setItemName={setItemName} total={0} />);
  })
  test("should renders header label", () => {

    const headerElement = screen.getAllByTestId("header");
    expect(headerElement[0]).toHaveTextContent("Add New To Do Item");
  });

  test("should renders ToDo input control", () => {

    const inputElement = screen.getAllByTestId("input-to-do");
    expect(inputElement[0]).toBeTruthy();
    expect(inputElement[0].className).toBe("input-to-do");
  });

  test("should renders ToDo button control", () => {
    const btnElement = screen.getAllByTestId("btn-add");
    fireEvent.click(btnElement[0]);
    expect(btnElement).toHaveLength(1);
    expect(btnElement[0]).toBeDefined();
  });

  test("should renders ToDo button tittle as Add", () => {
    const btnElement = screen.getAllByTestId("btn-add");
    expect(btnElement[0]).toHaveTextContent("Add");
    
  });

  test("should renders ToDo Total Item Label", () => {
    const lblTotal = screen.getByTestId("lbl-total");
    expect(lblTotal).toHaveTextContent("Total Items:0");
  });
  
});

