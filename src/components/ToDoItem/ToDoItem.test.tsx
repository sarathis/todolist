import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoItem from './ToDoItem';

test("Should render component", () => {
    render(
      <ToDoItem id={0} itemChecked={function (event: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
        } } name={''} completed={false} deleted={false}  />
    );
    const item = screen.findByTestId("comp-to-do-list-item");
    expect(item).toBeDefined();
  });