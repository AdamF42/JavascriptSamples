const theOneFunc = () => {
    if(global_seconds==5) {
        clearInterval(timer);
    }
    console.log("Hello after " + global_seconds + " seconds");
    global_seconds ++;
};

var global_seconds = 1;

const timer = setInterval(theOneFunc, global_seconds*1000, global_seconds);

