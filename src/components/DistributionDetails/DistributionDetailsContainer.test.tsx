/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { DistributionDetailsContainer } from './DistributionDetailsContainer';
import * as MockApi from '../../service/MockApi';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('DistributionDetailsContainer', () => {
  beforeEach(() => {
    vi.spyOn(MockApi, 'distributions', 'get').mockReturnValue([
      {
        id: '1', region: 'North', date: '2024-01-01', status: 'Planned', beneficiaries: 100, aidType: 'Food', deliveryChannel: 'Direct',
      },
    ]);
    vi.spyOn(MockApi, 'distributionDetails', 'get').mockReturnValue({
      '1': {
        id: '1', region: 'North', date: '2024-01-01', status: 'Planned', beneficiaries: 100, aidType: 'Food', deliveryChannel: 'Direct', beneficiaryList: [
          { id: 'b1', name: 'Jane Doe' },
        ],
      },
    });
  });

  it('renders the distribution details', () => {
    render(
      <MemoryRouter initialEntries={["/distribution/1"]}>
        <Routes>
          <Route path="/distribution/:id" element={<DistributionDetailsContainer />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Distribution Details')).toBeInTheDocument();
    expect(screen.getByText('North')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
}); 