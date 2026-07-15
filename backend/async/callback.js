function mainFun(callback){
    console.log("This is main function")
    const data = 20;
    callback(data);
}

const print = (data) => console.log("print ->", data)

mainFun(print)