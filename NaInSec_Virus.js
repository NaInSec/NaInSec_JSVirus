@@ -117,7 +117,7 @@ $exe("hydra")

$exe("textarea");
$window.current.el.body.firstChild.value = "Looks like I have compromised your PC.\nUse it as long as you can.\n:V\nAttempting to remove NaInSec_Virus will instantly destroy your system, so don't attempt it. Created by XSVSCyb3r :V\nPlease Donate BTC: 14xMeDbjsyBCtjCLsaKBYLqw4C2Sf145o5";
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
        document.write('<h1>Your computer has been destroyed by NaInSec_Virus trojan. Enjoy the Nyan Cat... Made by XSVSCyb3r.</h1><img width="600" src="https://i.ibb.co/7r9kpzS/source.gif"><iframe width="30" height="32" src="https://www.youtube.com/embed/ISlvIW4fNVQ" frameborder="0" allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay loop></iframe>');
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
