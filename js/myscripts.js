function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(e.keyCode-65 >= 0 && e.keyCode <= 91){
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    var output = ['Aakashi!!!', 'Boke Hinata Boke!', 'Chibi Chaan', 'Daichi Saan!', 'Esuu(ACE)', 'Fuuuuu hahahah!', 'Gomen Tsukki', 'Hey Hey Hey!!', 'Iwa Chan', 'JAPAN!!!', 'Koraaaaaaaaaaaaaa!!!!', 'Liev', 'Mou ipponnnn!!!', 'Nuf nufssss, Nice!', 'Oya! Oya oya? Oya Oya Oya!!', 'Pohhh', 'Quiiiii', 'Rolling thunderrrrrrrrr!!!!', 'C(Sh)ity boy mayyyy', 'Tobey flyyyy', 'Ueeeeeeyyyyyyyyyyy', 'Victoryyyyyyyy!!!!!', 'Waaaaaaaaaaahh...', 'Xwahhhhahahahahah!!', 'Yahoooo!', 'ZZzzzzzz' ]
    document.getElementById('tochange').innerHTML = "";
    document.getElementById('tochange1').innerHTML = ""; 
    setTimeout(() => {
      document.getElementById('tochange').innerHTML = alphabet[e.keyCode-65] + ' is for';
      document.getElementById('tochange1').innerHTML = output[e.keyCode-65];
    }, 100);
  } else {
    document.getElementById('tochange').innerHTML = "";
    setTimeout(() => {
      document.getElementById('tochange').innerHTML = 'Not this one baka!';
    }, 100);
    document.getElementById('tochange1').innerHTML = '';
  }

  if(!audio) return; // stops the functtion from running all together
  audio.currentTime = 0; // This will revind it to start
  audio.play();
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound)