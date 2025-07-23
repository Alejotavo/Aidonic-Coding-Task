import React from "react";

export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
}

export function PaginationComponent({
  currentPage,
  totalItems,
  itemsPerPage = 6,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      end = Math.min(5, totalPages);
    }
    if (currentPage >= totalPages - 2) {
      start = Math.max(1, totalPages - 4);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center sm:justify-end items-center mt-1 sm:mt-2">
      <ul className="inline-flex items-center space-x-0.5 text-xs">
        <li>
          <button
            className={`px-2 py-1 rounded-l border border-gray-300 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            &lt;
          </button>
        </li>
        {startEllipsis(pageNumbers) && (
          <li>
            <button
              className="px-2 py-1 border border-gray-300 bg-white hover:bg-gray-100"
              onClick={() => onPageChange(1)}
            >
              1
            </button>
            <span className="px-1 text-gray-400">...</span>
          </li>
        )}
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`px-2 py-1 border border-gray-300 ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}
        {endEllipsis(pageNumbers, totalPages) && (
          <li>
            <span className="px-1 text-gray-400">...</span>
            <button
              className="px-2 py-1 border border-gray-300 bg-white hover:bg-gray-100"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </li>
        )}
        <li>
          <button
            className={`px-2 py-1 rounded-r border border-gray-300 ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
}

function startEllipsis(pageNumbers: number[]) {
  return pageNumbers[0] > 2;
}
function endEllipsis(pageNumbers: number[], totalPages: number) {
  return pageNumbers[pageNumbers.length - 1] < totalPages - 1;
} 