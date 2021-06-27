import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/iTunes Search App/i);
  expect(linkElement).toBeInTheDocument();
});
