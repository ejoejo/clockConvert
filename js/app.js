function clockConvert(millisecond) {
    var hh = Math.floor((millisecond / 1000) / 60 / 60);
    var mm = Math.floor((millisecond - hh * 1000 * 60 * 60) / 1000 / 60);
    var ss = Math.floor((millisecond - hh * 1000 * 60 * 60 - mm * 1000 * 60) / 1000);
    return (hh.toString() + ':' + mm.toString() + ':' + ss.toString());
}
console.log("轉換後：" + clockConvert(100000000));