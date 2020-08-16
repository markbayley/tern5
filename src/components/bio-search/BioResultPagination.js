// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedFilterAction } from "../../store/reducer";

const BioResultPagination = ({ itemsPerPage, startFrom, totalImages }) => {
  const perPage = itemsPerPage ? itemsPerPage : 10;
  const pages = Math.ceil(totalImages / perPage);
  const pagination = [];

  let currentPage = startFrom <= pages ? startFrom : 1;
  const dispatch = useDispatch();

  let ellipsisLeft = false;
  let ellipsisRight = false;
  for (let i = 1; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push({ id: i, current: true, ellipsis: false });
    } else {
      if (
        i < 2 ||
        i > pages - 1 ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        pagination.push({ id: i, current: false, ellipsis: false });
      } else if (i > 1 && i < currentPage && !ellipsisLeft) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisLeft = true;
      } else if (i < pages && i > currentPage && !ellipsisRight) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisRight = true;
      }
    }
  }

  const changePage = (page, e) => {
    e.preventDefault();
    if (page !== currentPage) {
      //setCurrentPage(page);
      dispatch(selectedFilterAction({ page_num: page }));
    }
  };

  const goToPrevPage = (e) => {
    e.preventDefault();
    //setCurrentPage((prevVal) => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
    if (currentPage !== 1) {
      dispatch(selectedFilterAction({ page_num: currentPage - 1 }));
    }
  };

  const goToNextPage = (e) => {
    e.preventDefault();
    //setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
    if (currentPage !== pages) {
      dispatch(selectedFilterAction({ page_num: currentPage + 1 }));
    }
  };

  return {
    pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage,
  };
};

export default BioResultPagination;
