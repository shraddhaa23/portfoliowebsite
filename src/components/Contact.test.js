import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

beforeAll(() => {
  window.alert = jest.fn();
});

describe('Contact Component', () => {
  test('renders contact form with name input', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    expect(nameInput).toBeInTheDocument();
  });

  test('submits contact form', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/Your Email/i);
    const messageInput = screen.getByPlaceholderText(/Your Message/i);
    const submitButton = screen.getByText(/Send/i);

    fireEvent.change(nameInput, { target: { value: 'Shraddha' } });
    fireEvent.change(emailInput, { target: { value: 'shraddha@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Message submitted successfully!');
  });
});
