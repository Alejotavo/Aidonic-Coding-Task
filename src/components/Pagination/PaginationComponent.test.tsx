/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { PaginationComponent } from './PaginationComponent';

describe('PaginationComponent', () => {
  it('renderiza los botones de paginación y llama a onPageChange', () => {
    const handlePageChange = vi.fn();
    render(
      <PaginationComponent
        currentPage={2}
        totalItems={30}
        itemsPerPage={6}
        onPageChange={handlePageChange}
      />
    );
    expect(screen.getByLabelText('Previous Page')).toBeInTheDocument();
    expect(screen.getByLabelText('Next Page')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Previous Page'));
    expect(handlePageChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByLabelText('Next Page'));
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });
}); 