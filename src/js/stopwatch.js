const elapsedTime = {hh:0, mm:0, ss:0, ms:0};

const timer = (()=> {
    let timerId = null;
    let {hh, mm, ss, ms} = elapsedTime;

    timerId = setInterval(() => {
        ms += 1;
        if(ms >= 100){
            ss += 1;
            ms = 0;
        }
        if(ss >= 60){
            mm += 1;
            ss = 0;
        }
        if(mm >= 60){
            hh += 1;
            mm = 0;
        }
    })
})();