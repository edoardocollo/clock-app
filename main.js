
var documentTarget = $('#main_container');
var audio = document.getElementById("myAudio");
var displayOra = $('#display_ora');

// VISUALIZZA ORA A SCHERMO
//////////////////////////////
setInterval(function () {
  var oraAttuale = new Date();
  var secondi = oraAttuale.getSeconds();
  var minuti = oraAttuale.getMinutes();
  var ore = oraAttuale.getHours();
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

var startSveglia = $('#start_sveglia');
startSveglia.click(function(){
  var ora = Number($('.input_sveglia1').val());
  var minuti = Number($('.input_sveglia2').val());
  var secondi = Number($('.input_sveglia3').val());
  var oraSveglia = $('#ora_sveglia');
  oraSveglia.text(`La sveglia è stata settata alle ore:${ora}:${minuti}:${secondi}`)
  console.log(ora, minuti, secondi);

  setInterval(sveglia, 1000, ora, minuti, secondi);
});




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


// COUNTDOWN
//////////////////

var countdownBtn = $('#start_countdown');
var countdown = $('#countdown');
countdownBtn.click(function(){
  // interrompo il ciclo precedente per fermare countdown precedente se esiste
  countdownBtn.click(function(){

    clearInterval(variabileCountdown);
  });
  // azzero contenuto countdown se presente
  countdown.text('');
  var ore = Number($('.input1').val());
  var minuti = Number($('.input2').val());
  var secondi = Number($('.input3').val());
  $('.input1').val(0);
  $('.input2').val(0);
  $('.input3').val(0);
  console.log(ore, minuti , secondi);
  var variabileCountdown = setInterval(function () {
    countdown.text(`${ore}:${minuti}:${secondi}`);
    if (ore == 0 && minuti == 0 && secondi == 0) {
      countdown.text(`${ore}:${minuti}:${secondi}`);
      clearInterval(variabileCountdown);
    }
    if (secondi == 0) {
      minuti--;
      secondi = 60;
    }
    if (minuti == 0 && secondi == 0) {
      ore--;
      minuti = 60;
    }
    secondi--;
  }, 1000);
});
