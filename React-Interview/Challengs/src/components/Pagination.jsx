import React, { useState } from 'react'

const Pagination = () => {
    const data = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"
    ];

    const [page, setPage] = useState(1)
    const itemsPerPage = 3;

    //calaculate items
    const start = (page - 1) * itemsPerPage;
    const currentItems = data.slice(start, start + itemsPerPage);

    //handlers
    const handelNext = () => {
        if (page < Math.ceil(data.length / itemsPerPage)) {
            setPage(page + 1);
        }
    }

    const handelPrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <div>
            <h3>Pagination</h3>
            <ul>{
                currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }</ul>

            <button onClick={handelPrev}>Prev</button>
            <span>Page {page}</span>
            <button onClick={handelNext}>Next</button>
        </div>
    )
}

export default Pagination