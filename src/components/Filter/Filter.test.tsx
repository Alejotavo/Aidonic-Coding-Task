/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { Filter } from './Filter';

describe('Filter', () => {
  it('renderiza el label y las opciones, y llama a onChange', () => {
    const handleChange = vi.fn();
    render(
      <Filter
        label="Status"
        value=""
        options={["Planned", "Ongoing", "Completed"]}
        onChange={handleChange}
      />
    );
    expect(screen.getByLabelText('Status:')).toBeInTheDocument();
    expect(screen.getByText('Planned')).toBeInTheDocument();
    expect(screen.getByText('Ongoing')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Status:'), { target: { value: 'Ongoing' } });
    expect(handleChange).toHaveBeenCalledWith('Ongoing');
  });
}); 