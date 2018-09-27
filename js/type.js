$( document ).ready(function() {

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        strings: ["First ^1000 sentence.", "Second sentence."],
        backSpace: 40,
        typeSpeed: 40,
        loop: true,
        loopCount: Infinity
    });
});