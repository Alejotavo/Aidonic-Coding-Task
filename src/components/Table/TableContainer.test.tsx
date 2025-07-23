/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { TableContainer } from './TableContainer';
import * as MockApi from '../../service/MockApi';
import { MemoryRouter } from 'react-router-dom';


describe('TableContainer', () => {
  beforeEach(() => {
    vi.spyOn(MockApi, 'distributions', 'get').mockReturnValue([
      {
        id: '1', region: 'North', date: '2024-01-01', status: 'Planned', beneficiaries: 100, aidType: 'Food', deliveryChannel: 'Direct',
      },
      {
        id: '2', region: 'South', date: '2024-01-02', status: 'Completed', beneficiaries: 200, aidType: 'Water', deliveryChannel: 'Voucher',
      },
    ]);
  });

  it('renderiza solo las filas con el status filtrado', () => {
    render(
      <MemoryRouter>
        <TableContainer status="Completed" region="" />
      </MemoryRouter>
    );
    expect(screen.getByText('South')).toBeInTheDocument();
    expect(screen.queryByText('North')).not.toBeInTheDocument();
  });
}); 