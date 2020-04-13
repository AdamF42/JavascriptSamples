const theOneFunc = (seconds) => {
    console.log("Hello after " + seconds + " seconds");
};

setTimeout(theOneFunc, 4*1000, 4);

setTimeout(theOneFunc, 8*1000, 8);