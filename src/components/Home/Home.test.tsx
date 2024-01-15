import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  afterAll(() => {
    cleanup();
  });

  beforeEach(() => {});

  test("should render child component Add New To Do Item", () => {
    render(<Home />);
    const comp_home_base = screen.getByTestId("comp-home-base");
    const comp_new_to_do_item = screen.getByTestId("comp-new-to-do-item");
    expect(comp_home_base).toContainElement(comp_new_to_do_item);
  });

  test("should render child component Add New To Do Item and check for the input control", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    expect(inputElement).toBeDefined();
  });

  test("should increment the total number of to do count", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const lbl_total = screen.getByTestId("lbl-total");
    expect(lbl_total).toHaveTextContent("Total Items:1");
  });

  test("should increment the total number for adding multiple items", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to check the stocks" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to send off my cousin" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to inform manager about the late" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const lbl_total = screen.getByTestId("lbl-total");
    expect(lbl_total).toHaveTextContent("Total Items:4");
  });

  test("should render the added to do items on the list", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to cook my noodles" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const comp_to_do_list_item_all = screen.getAllByTestId(
      "comp-to-do-list-item"
    );
    expect(comp_to_do_list_item_all).toHaveLength(2);
  });

  test("should render child component Add New To Do Item", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to cook my noodles" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const comp_to_do_list_item_all = screen.getAllByTestId(
      "comp-to-do-list-item"
    );
    expect(comp_to_do_list_item_all).toHaveLength(2);
  });

  test("should render the added item in the list after item added,check record cells rendered", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const comp_to_do_list_item_all = screen.getAllByTestId(
      "comp-to-do-list-item"
    );
    const data_to_do_item_id = screen.getAllByTestId("data-to-do-item-id");
    const data_to_do_item_name = screen.getAllByTestId("data-to-do-item-name");
    const data_to_do_item_completed = screen.getAllByTestId("data-to-do-item-completed");
    expect(comp_to_do_list_item_all[0]).toContainElement(data_to_do_item_id[0]);
    expect(comp_to_do_list_item_all[0]).toContainElement(data_to_do_item_name[0]);
    expect(comp_to_do_list_item_all[0]).toContainElement(data_to_do_item_completed[0]);
  });

  test("should able to check the to do item to complete and delete", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to go medical store" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const check_box_to_do_item = screen.getAllByTestId("check-box-to-do-item");
    fireEvent.click(check_box_to_do_item[0]);
    fireEvent.click(check_box_to_do_item[1]);
    expect((check_box_to_do_item[0] as HTMLInputElement).checked).toBe(true);
    expect((check_box_to_do_item[1] as HTMLInputElement).checked).toBe(true);
    //screen.debug();
  });

  test("should show complete and delete button on row item selecetd", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to go medical store" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const check_box_to_do_item = screen.getAllByTestId("check-box-to-do-item");
    fireEvent.click(check_box_to_do_item[0]);
    expect((check_box_to_do_item[0] as HTMLInputElement).checked).toBe(true);
    const  btn_complete = screen.getByTestId("btn-complete");
    expect(btn_complete).toBeInTheDocument();
   
  });

  test("should auto generate id on newly added item", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to go medical store" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const check_box_to_do_item = screen.getAllByTestId("data-to-do-item-id");
    expect(check_box_to_do_item[0]).toHaveTextContent("1");
    expect(check_box_to_do_item[1]).toHaveTextContent("2");
  
  });

  test("should show the name of the to do item in the grid", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to go medical store" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const check_box_to_do_item = screen.getAllByTestId("data-to-do-item-name");
    expect(check_box_to_do_item[0]).toHaveTextContent("Need to go gym and workout");
    expect(check_box_to_do_item[1]).toHaveTextContent("Need to go medical store");
  
  });

  test("should show the status of the to do item as  pending by default in the grid", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to go medical store" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const check_box_to_do_item = screen.getAllByTestId("data-to-do-item-completed");
    expect(check_box_to_do_item[0]).toHaveTextContent("Status:Pending");
    expect(check_box_to_do_item[1]).toHaveTextContent("Status:Pending");
  
  });

  test("should show the status of the seleceted items as completed, when complete button triggred", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to go medical store" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const check_box_to_do_item = screen.getAllByTestId("check-box-to-do-item");
    fireEvent.click(check_box_to_do_item[0]);
    fireEvent.click(check_box_to_do_item[1]);
    expect((check_box_to_do_item[0] as HTMLInputElement).checked).toBe(true);
    expect((check_box_to_do_item[1] as HTMLInputElement).checked).toBe(true);
    const data_to_do_item_completed = screen.getAllByTestId("data-to-do-item-completed");
    expect(data_to_do_item_completed[0]).toHaveTextContent("Status:Pending");
    expect(data_to_do_item_completed[1]).toHaveTextContent("Status:Pending");
    const btn_complete = screen.getByTestId("btn-complete");
    fireEvent.click(btn_complete);
    const data_to_do_item_completed2 = screen.getAllByTestId("data-to-do-item-completed");
    expect(data_to_do_item_completed2[0]).toHaveTextContent("Status:Completed");
    expect(data_to_do_item_completed2[1]).toHaveTextContent("Status:Completed");
  
  });

  test("should delete the items from the grid, by clicking delete button", () => {
    render(<Home />);
    const inputElement = screen.getByTestId("input-to-do");
    fireEvent.change(inputElement, {
      target: { value: "Need to go gym and workout" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to check the stocks" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to send off my cousin" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    fireEvent.change(inputElement, {
      target: { value: "Need to inform manager about the late" },
    });
    fireEvent.click(screen.getByTestId("btn-add"));
    const lbl_total = screen.getByTestId("lbl-total");
    expect(lbl_total).toHaveTextContent("Total Items:4");
    const check_box_to_do_item = screen.getAllByTestId("check-box-to-do-item");
    fireEvent.click(check_box_to_do_item[0]);
    fireEvent.click(check_box_to_do_item[1]);
    const btn_delete = screen.getByTestId("btn-delete");
    fireEvent.click(btn_delete);
    const lbl_total2 = screen.getByTestId("lbl-total");
    expect(lbl_total2).toHaveTextContent("Total Items:2");
  });

});
