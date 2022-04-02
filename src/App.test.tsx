import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('props is avaliable', () => {
  const value = '123';
  render(<App value={value} />);
  expect(screen.getByRole('props')).toHaveTextContent(value);
});

test('click of button is avaliable', () => {
  render(<App value="123" />);
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('button')).toHaveTextContent(`count is: 1`);
});
