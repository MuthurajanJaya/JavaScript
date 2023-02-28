var d = 23;
(function () {
    var d = 43;
    (function random() {
        d++;
        console.log(d)
        var d = 21;
    })();
})();