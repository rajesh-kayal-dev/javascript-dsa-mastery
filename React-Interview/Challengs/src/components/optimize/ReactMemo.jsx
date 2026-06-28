import React, { useState } from 'react'

const ListItem = React.memo(({ item }) => {
    console.log("Rendering: ", item);
    return <li>{item}</li>
})

const ReactMemo = () => {
    const [count, setCount] = useState(0)
    const items = ["Apple", "Banana", "Mango"];

    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>Count {count}</button>

            <ul>{items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))
            }</ul>
        </div>
    )
}

export default ReactMemo