/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../service/MockApi', () => ({
  distributions: [
    {
      id: '1', region: 'North', date: '2024-01-01', status: 'Planned', beneficiaries: 100, aidType: 'Food', deliveryChannel: 'Direct',
    },
    {
      id: '2', region: 'South', date: '2024-01-02', status: 'Completed', beneficiaries: 200, aidType: 'Water', deliveryChannel: 'Voucher',
    },
  ]
}));

import { TableContainer } from './TableContainer';

describe('TableContainer', () => {
  it('renderiza solo las filas con el status filtrado', () => {
    render(
      <MemoryRouter>
        <TableContainer status="Completed" region="" />
      </MemoryRouter>
    );
    expect(screen.getAllByText('South')[0]).toBeInTheDocument();
    expect(screen.queryByText('North')).not.toBeInTheDocument();
  });
});