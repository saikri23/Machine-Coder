const Pagination = ({ page, handlePageSelect, totalPages }) => {
  const maxVisiblePages = 5; // Max pages visible at a time

  const renderKey = (curPage, key) => {
    return (
      <span
        key={key}
        className={page === curPage ? "selected" : ""}
        onClick={() => handlePageSelect(curPage)}
      >
        {curPage}
      </span>
    );
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= maxVisiblePages) {
      // Case when total pages are within max visible pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(renderKey(i, i));
      }
    } else {
      const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (startPage > 1) {
        pageNumbers.push(renderKey(1, 1)); // Always include first page
        if (startPage > 2) pageNumbers.push(<span key="start">...</span>); // Ellipsis before middle pages
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(renderKey(i, i));
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push(<span key="end">...</span>); // Ellipsis after middle pages
        pageNumbers.push(renderKey(totalPages, totalPages)); // Always include last page
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <span
        className={page === 1 ? "disable" : ""}
        onClick={() => handlePageSelect(page - 1)}
      >
        ◀️
      </span>
      {renderPageNumbers()}
      <span
        className={page === totalPages ? "disable" : ""}
        onClick={() => handlePageSelect(page + 1)}
      >
        ▶️
      </span>
    </div>
  );
};

export default Pagination;
