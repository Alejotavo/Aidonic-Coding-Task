/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { LineChart } from './LineChart';
describe('LineChart', () => {
  it('renderiza el título y el canvas', () => {
    render(<LineChart />);
    expect(screen.getByText('Beneficiaries per Distribution')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument(); // El canvas de chartjs tiene role="img"
  });
}); 