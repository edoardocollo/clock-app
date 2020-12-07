
var documentTarget = $('#main_container');
var audio = document.getElementById("myAudio");
var displayOra = $('#display_ora');

// VISUALIZZA ORA A SCHERMO
//////////////////////////////
setInterval(function () {
  var oraAttuale = new Date();
  var secondi = oraAttuale.getSeconds();
  var minuti = oraAttuale.getMinutes();
  var ore = oraAttuale.getMonth();
  displayOra.text(`${ore}:${minuti}:${secondi}`)

}, 1000);




// FUNZIONE SVEGLIA
//////////////////////////

function sveglia(setOre,setMinuti,setSecondi) {

    var now = new Date();
    var secondi = now.getSeconds();
    var minuti = now.getMinutes();
    var ore = now.getMonth();
    var setSecondi;
    var setMinuti;
    var setOre;

    // documentTarget.text(`${ore}:${minuti}:${secondi}`);
    if (secondi == setSecondi && minuti == setMinuti && ore == setOre) {
      audio.play();
    }
}

setInterval(
sveglia
, 1000,11,36,10 );

// CRONOMETRO
/////////////////////
var cronometro = $('#cronometro');
var cronometroBtn = $('#bottone_cronometro');
var stopButton = $('#stop');
cronometroBtn.click(function(){
  var millisecondi = 0;
  var secondi = 0;
  var minuti = 0;
  var ore = 0;
  var displayCronometro = setInterval(function () {
    millisecondi++;
    if (millisecondi == 10) {
      secondi++;
      millisecondi = 0;
    }
    if (secondi == 60) {
      minuti++;
      secondi = 0;
    }
    if (minuti == 60) {
      ore++;
      minuti = 0;
    }
    cronometro.text(`${ore}:${minuti}:${secondi}:${millisecondi}`);
  }, 100);
  stopButton.click(function(){
    clearInterval(displayCronometro);
});

});
