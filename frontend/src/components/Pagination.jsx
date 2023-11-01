import React from "react";
import 'font-awesome/css/font-awesome.min.css';


const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {

  const pageNumbers = [];
  const maxPageNumber = Math.ceil(totalUsers / usersPerPage);

  for (let i = 1; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4 flex justify-center">
      <button
        className="border rounded px-2 py-1 m-1 text-xs"
        style={{ color: currentPage === 1 ? "gray" : "blue" }}
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
      >
        ←
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`border rounded px-2 py-1 m-1 text-xs min-w-8
                        ${
                          currentPage === number
                            ? "bg-sky-300 text-white"
                            : "text-sky-500"
                        }`}
        >
          {number}
        </button>
      ))}

      <button
        className="border rounded px-2 py-1 m-1 text-xs"
        style={{ color: currentPage === maxPageNumber ? "gray" : "blue" }}
        disabled={currentPage === maxPageNumber}
        onClick={() => paginate(currentPage + 1)}
      >
        →
      </button>
    </nav>
  );
};

export default Pagination;
