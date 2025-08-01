import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects Component', () => {
  test('renders project section heading', () => {
    render(<Projects />);
    const heading = screen.getByText(/Projects/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders project titles', () => {
    render(<Projects />);
    expect(screen.getByText(/Bakery Management System/i)).toBeInTheDocument();
    expect(screen.getByText(/Song Recommendation System/i)).toBeInTheDocument();
  });

  test('renders tech stack', () => {
    render(<Projects />);
    expect(
      screen.getByText(/Tech Stack: HTML, CSS, JavaScript, MySQL, C#, ASP.NET, jQuery/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Tech Stack: Python/i)).toBeInTheDocument();
  });
});
