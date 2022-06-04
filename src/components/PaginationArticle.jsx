import "./PaginationArticle.css";
import React from "react";

const PaginationArticle = ({ currentPage, setCurrentPage, pages }) => {
    return (
        <div className='area--btn-pagination'>
            {Array.from(Array(pages), (item, index) => {
                return (
                    <button
                        key={index}
                        style={
                            index === currentPage
                                ? {
                                      backgroundColor: "#FF004C",
                                      padding: "15px",
                                      color: "#eee",
                                  }
                                : null
                        }
                        value={index}
                        onClick={(e) => {
                            setCurrentPage(Number(e.target.value));
                        }}
                        className='btn-pagination'
                    >
                        {index + 1}
                    </button>
                );
            })}
        </div>
    );
};

export default PaginationArticle;
