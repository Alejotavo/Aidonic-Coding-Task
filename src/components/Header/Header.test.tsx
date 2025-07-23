/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renderiza el título y los links de navegación', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Aid Distribution Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    // Verifica que los links sean <a>
    expect(screen.getByText('Home').tagName).toBe('A');
    expect(screen.getByText('Dashboard').tagName).toBe('A');
  });
}); 