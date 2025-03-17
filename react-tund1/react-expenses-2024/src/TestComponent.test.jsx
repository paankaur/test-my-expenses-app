// testing if setup works
// import React from 'react'; 
import { render, screen } from '@testing-library/react';
import MyComponent from './TestComponent';

test('renders Hello, World! text', () => {
  render(<MyComponent />);
  const element = screen.getByText(/hello, world!/i); // Find the element
  expect(element).toBeInTheDocument(); // Check if it's in the document
});
