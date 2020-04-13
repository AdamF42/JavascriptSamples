let global_seconds = 1;


const theOneFunc = () => {
    console.log("Hello after " + global_seconds + " seconds");
    global_seconds ++;
};


setInterval(theOneFunc, global_seconds*1000, global_seconds)