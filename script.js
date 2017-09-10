let balls = document.querySelectorAll('.balls');

function intToBin(n, pref) {
    let a = [],
        h, l, hDv = 0,
        lDv = 0;
    h = n > 9 ? ~~(n / 10) : 0;
    l = n % 10;
    while (l > 0 || h > 0) {
        if (l > 0) {
            if (l & 1) {
                a.push(pref + 'l' + (2 ** lDv));
            }
            l >>= 1;
            lDv++;
        }
        if (h > 0) {
            if (h & 1) {
                a.push(pref + 'h' + (2 ** hDv));
            }
            h >>= 1;
            hDv++;
        }
    }
    return a;
}

function handleTime() {
    let arr = [];
    let hours, minutes, seconds, now;
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    arr = arr.concat(intToBin(hours, 'h'), intToBin(minutes, 'm'), intToBin(seconds, 's'));
    //    console.log(arr);


    balls.forEach(v => arr.includes(v.dataset.dv) ? v.classList.add('on') : v.classList.remove('on'));
}

setInterval(handleTime, 1000);