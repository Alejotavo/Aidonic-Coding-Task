/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { PieChart } from './PieChart';
describe('PieChart', () => {
  it('renderiza el título y el canvas', () => {
    render(<PieChart />);
    expect(screen.getByText('Aid Distribution by Type')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument(); // El canvas de chartjs tiene role="img"
  });
}); 