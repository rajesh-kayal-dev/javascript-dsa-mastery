import React, { useEffect, useState } from 'react'

const SearchUser = () => {
    const [input, setInput] = useState("");
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const timmer = setTimeout(() => {
            setSearch(input)
        }, 5000);

        return () => clearTimeout(timmer)
    }, [input])


    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch('https://json-placeholder.mock.beeceptor.com/users');
                const data = await res.json();
                const filterData = data.filter((user) => 
                    user.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
                setUsers(filterData)

            } catch (error) {
                console.error("users data fetch faild", error)
            }
        };

        if (search) {
            getUsers();
        }
    }, [search])

    return (
        <div>
            <h1>Search Users</h1>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Search...'
            />
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchUser