import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonsSet from './ButtonsSet';

test('renders learn react link', () => {
  const fn1=jest.fn;
  const fn2=jest.fn;
  render(<ButtonsSet onComplete={fn1} onDelete={fn2} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
