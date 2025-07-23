/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
describe('Dashboard', () => {
  it('renderiza los títulos de los charts', () => {
    render(<Dashboard />);
    expect(screen.getByText('Aid Distribution by Type')).toBeInTheDocument();
    expect(screen.getByText('Beneficiaries per Distribution')).toBeInTheDocument();
  });
}); 