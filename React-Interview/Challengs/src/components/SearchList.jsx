import React, { useState } from 'react'

const SearchList = () => {
    const [search, setSearch] = useState("")

    const items = ["Apple", "Banana", "Mango", "Orange", "Goava"];

    const filterItems = items.filter((item) => (
        item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ))


    return (
        <div>
            <h1>Search List</h1>
            <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name='search'
                placeholder='Search...'
            />
            <ul>
                {
                    filterItems.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>


        </div>
    )
}

export default SearchList