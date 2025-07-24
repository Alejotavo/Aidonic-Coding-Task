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

  it('shows the distribution data in the table', () => {
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
    expect(screen.getAllByText('North').length).toBeGreaterThan(0);
    expect(screen.getAllByText('South').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Planned').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Completed').length).toBeGreaterThan(0);
    expect(screen.getAllByText('100').length).toBeGreaterThan(0);
    expect(screen.getAllByText('200').length).toBeGreaterThan(0);
  });

  it('shows the Details message as a link', () => {
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