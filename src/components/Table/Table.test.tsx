/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import type { Distribution } from '../../models/Beneficiary';
import { MemoryRouter } from 'react-router-dom';


describe('Table (presentational)', () => {
  const mockDistributions: Distribution[] = [
    {
      id: '1',
      region: 'North',
      date: '2024-01-01',
      status: 'Planned',
      beneficiaries: 100,
      aidType: 'Food',
      deliveryChannel: 'Direct',
    },
    {
      id: '2',
      region: 'South',
      date: '2024-01-02',
      status: 'Completed',
      beneficiaries: 200,
      aidType: 'Water',
      deliveryChannel: 'Voucher',
    },
  ];

  it('muestra los datos de las distribuciones en la tabla', () => {
    render(
      <MemoryRouter>
        <Table
          distributions={mockDistributions}
          currentPage={1}
          itemsPerPage={6}
          totalItems={2}
          onPageChange={() => {}}
        />
      </MemoryRouter>
    );
    expect(screen.getByText('North')).toBeInTheDocument();
    expect(screen.getByText('South')).toBeInTheDocument();
    expect(screen.getByText('Planned')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });

  it('muestra el mensaje Details como link', () => {
    render(
      <MemoryRouter>
        <Table
          distributions={mockDistributions}
          currentPage={1}
          itemsPerPage={6}
          totalItems={2}
          onPageChange={() => {}}
        />
      </MemoryRouter>
    );
    expect(screen.getAllByText('Details')[0].tagName).toBe('A');
  });
}); 