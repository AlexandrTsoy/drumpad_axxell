const audioFiles = {
  1: 'sound1.mp3',
  2: 'sound2.mp3',
  3: 'sound3.mp3',
  4: 'sound4.mp3',
  5: 'sound5.mp3',
  6: 'sound6.mp3',
  7: 'sound7.mp3',
  8: 'sound8.mp3',
  9: 'sound9.mp3',
  10: 'sound10.mp3',
  11: 'sound11.mp3',
  12: 'sound12.mp3',
  13: 'sound13.mp3',
  14: 'sound14.mp3',
  15: 'sound15.mp3',
  16: 'sound16.mp3',
  17: 'sound17.mp3',
  18: 'sound18.mp3',
  19: 'sound19.mp3',
  20: 'sound20.mp3',
  21: 'sound21.mp3',
  22: 'sound22.mp3',
  23: 'sound23.mp3',
  24: 'sound24.mp3',
  25: 'sound25.mp3'
};

const drumPads = document.querySelectorAll('.drum-pad');
const pads1to10Checkbox = document.getElementById('pads1to10-checkbox');
const pads11to25Checkbox = document.getElementById('pads11to25-checkbox');
const volumeSlider = document.getElementById('volume-slider');

drumPads.forEach(pad => {
  pad.addEventListener('click', () => playSound(pad.dataset.key));
});

document.addEventListener('keydown', e => {
  if (e.key === 'q') {
    playSound('1');
  } else if (e.key === 'w') {
    playSound('2');
  } else if (e.key === 'e') {
    playSound('3');
  } else if (e.key === 'r') {
    playSound('4');
  } else if (e.key === 't') {
    playSound('5');
  } else if (e.key === 'y') {
    playSound('6');
  } else if (e.key === 'u') {
    playSound('7');
  } else if (e.key === 'i') {
    playSound('8');
  } else if (e.key === 'o') {
    playSound('9');
  } else if (e.key === 'p') {
    playSound('10');
  } else if (e.key === 'a') {
    playSound('11');
  } else if (e.key === 's') {
    playSound('12');
  } else if (e.key === 'd') {
    playSound('13');
  } else if (e.key === 'f') {
    playSound('14');
  } else if (e.key === 'g') {
    playSound('15');
  } else if (e.key === 'h') {
    playSound('16');
  } else if (e.key === 'j') {
    playSound('17');
  } else if (e.key === 'k') {
    playSound('18');
  } else if (e.key === 'l') {
    playSound('19');
  } else if (e.key === 'z') {
    playSound('20');
  } else if (e.key === 'x') {
    playSound('21');
  } else if (e.key === 'c') {
    playSound('22');
  } else if (e.key === 'v') {
    playSound('23');
  } else if (e.key === 'b') {
    playSound('24');
  } else if (e.key === 'n') {
    playSound('25');
  }
});

function playSound(key) {
const audioFile = audioFiles[key];
  if (!audioFile || !padsEnabled[key]) return;

const audio = new Audio(audioFile);
audio.volume = volumeSlider.value;
audio.play();
}

pads1to10Checkbox.addEventListener('change', () => {
  togglePads(1, 10, pads1to10Checkbox.checked);
});

pads11to25Checkbox.addEventListener('change', () => {
  togglePads(11, 25, pads11to25Checkbox.checked);
});

volumeSlider.addEventListener('input', () => {
const pads = document.querySelectorAll('.drum-pad');
pads.forEach(pad => {
const audioFile = audioFiles[pad.dataset.key];
  if (audioFile) {
const audio = new Audio(audioFile);
audio.volume = volumeSlider.value;
  }
});
});

function togglePads(startIndex, endIndex, enable) {
  for (let i = startIndex; i <= endIndex; i++) {
    const pad = document.querySelector(`.drum-pad[data-key="${i}"]`);
    pad.disabled = !enable;
    padsEnabled[i] = enable;
  }
}

let padsEnabled = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  10: true,
  11: true,
  12: true,
  13: true,
  14: true,
  15: true,
  16: true,
  17: true,
  18: true,
  19: true,
  20: true,
  21: true,
  22: true,
  23: true,
  24: true,
  25: true
};