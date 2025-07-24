/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { PieChart } from './PieChart';
describe('PieChart', () => {
  it('renders the title and the canvas', () => {
    render(<PieChart />);
    expect(screen.getByText('Aid Distribution by Type')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument(); // El canvas de chartjs tiene role="img"
  });
}); 