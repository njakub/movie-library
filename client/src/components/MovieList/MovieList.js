import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import MovieCard from "../MovieCard/MovieCard";

function Items({ currentItems }) {
  return (
    <>
      {currentItems && currentItems.map((item) => <MovieCard movie={item} />)}
    </>
  );
}

function PaginatedItems({ itemsPerPage, items = [] }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function MovieList({ moviesResponse }) {
  // Example items, to simulate fetching from another resources.
  return (
    <div>
      <PaginatedItems itemsPerPage={5} items={moviesResponse} />
    </div>
  );
}

export default MovieList;
