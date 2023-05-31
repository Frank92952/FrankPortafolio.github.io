const pelota = document.getElementById('pelota');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const reverseBtn = document.getElementById('reverse');

let animation;
let isReverse = false;
let initialPosition = '0px';
pelota.style.animationPlayState = 'paused';

function play() {
  animation = pelota.style.animation;
  pelota.style.animationPlayState = 'running';
}

function pause() {
  pelota.style.animationPlayState = 'paused';
}

function stop() {
  pelota.style.animation = animation;
  pelota.style.animationPlayState = 'paused';
  pelota.style.left = initialPosition;
  isReverse = false;
}

function reverse() {
  if (!isReverse) {
	pelota.style.animation = 'moveBallReverse 2s infinite linear';
	initialPosition = '500px';
	isReverse = true;
  } else {
	pelota.style.animation = 'moveBall 2s infinite linear';
	initialPosition = '0px';
	isReverse = false;
  }
}