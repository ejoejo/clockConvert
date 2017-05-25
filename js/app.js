function clock(millisecond) {
    var hh = numConvert(Math.floor((millisecond / 1000) / 60 / 60));
    var mm = numConvert(Math.floor((millisecond % (1000 * 60 * 60)) / 1000 / 60));
    var ss = numConvert(Math.floor(millisecond % (1000 * 60 * 60) % (1000 * 60) / 1000));
    return (hh + ':' + mm + ':' + ss);
}

function numConvert(number) {
    if (number === 0) {
        return "00";
    } else {
        return number.toString();
    }
}
console.log("轉換後：" + clock(100000000));