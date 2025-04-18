import React from "react";

const Pagecount = ({
  currentPage,
  setCurrentPage,
  totalPosts,
  postsPerPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white">
      <div className="join flex justify-center pb-10 pt-10 ">
        <button
          className="join-item btn btn-square bg-white text-black "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`join-item btn btn-square  bg-white text-black ${
              currentPage === index + 1 ? "btn-active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
            aria-label={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="join-item btn btn-square  bg-white text-black "
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagecount;
