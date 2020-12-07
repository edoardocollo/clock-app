// Set variable to current date and time

// View the output
var documentTarget = $('#main_container');
var audio = document.getElementById("myAudio");



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
, 1000,11,20,50 );
