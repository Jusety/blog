import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagination(totalPages);
    
    return (
        <div className="page-wrapper">
                {pagesArray.map((p) => {
                    return (
                        <span
                            onClick={() => changePage(p)}
                            className={
                                page === p ? "page__current page" : "page"
                            }
                            key={p}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
    )
};

export default Pagination;
