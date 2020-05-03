import React from 'react';
import { render } from '@testing-library/react';
import Item from '.';

test('renders app component', () => {
  const { getByText } = render(<Item fullName="John Doe" />);
  const linkElement = getByText(/John Doe/i);
  expect(linkElement).toBeInTheDocument();
});
