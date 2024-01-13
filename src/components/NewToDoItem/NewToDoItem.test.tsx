import React from 'react';
import { render, screen } from '@testing-library/react';
import NewToDoItem from './NewToDoItem';

test('renders header label', () => {
  const setItemName = jest.fn();
  render(<NewToDoItem setItemName={setItemName} />);
  const headerElement = screen.getAllByTestId("header");
  expect(headerElement[0]).toHaveTextContent("Add New To Do Item");
});
