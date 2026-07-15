const fetchData = new Promise((resolve,reject)=>{
    const success = true;

    if(success){
        resolve("Data fetch successfull")
    }else{
        reject("Data fetchning faild")
    }
})

fetchData
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))