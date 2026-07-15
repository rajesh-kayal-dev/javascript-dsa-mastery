const fetchData = async () =>{
    const api = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await api.json()

    console.log(data)
}

fetchData()