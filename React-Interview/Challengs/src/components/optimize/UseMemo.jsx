import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setSount] = useState(0);
    const items = ["apple", "banana", "mango"];

    const upperItem = useMemo(() => {
        return items.map((item) => item.toLocaleUpperCase())
    }, [items])

    return (
        <div>
            <div>
                <button onClick={() => setSount(count + 1)}>count {count}</button>
            </div>

            <div>
                <ul>{upperItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}</ul>
            </div>
        </div>
    )
}

export default UseMemo