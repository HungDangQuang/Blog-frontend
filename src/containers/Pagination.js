import React from "react";

import "../style/container.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination-self">
        <button className="pagination-link">&lt;</button>
        {pageNumbers.map((number) => (
          <li key={number} className="pagition-item">
            <button
              onClick={() => paginate(number)}
              className="pagination-link"
            >
              {number}
            </button>
          </li>
        ))}
        <button className="pagination-link">&gt;</button>
      </div>
    </nav>
  );
};

export default Pagination;
