import { useState } from 'react';

const usePagination = (totalItems, itemsPerPage = 20) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const isPrevEnabled = (page > 1);
  const isNextEnabled = (page < totalPages);

  const onPrev = () => {
    if (isPrevEnabled) {
      setPage(page => page - 1);
    }
  };

  const onNext = () => {
    if (isNextEnabled) {
      setPage(page => page + 1);
    }
  };

  return {
    page,
    totalPages,
    itemsPerPage,
    totalItems,
    isPrevEnabled,
    isNextEnabled,
    onPrev,
    onNext,
  };
};

export default usePagination;
