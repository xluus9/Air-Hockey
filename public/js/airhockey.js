var platform = document.getElementById('platform');
var ctx = platform.getContext('2d');

var paddle = [
  {
    x: 500,
    y: 200,
    radius: 25,
    speed: 500,
    color: 'white'
  },
  {
    x: 200,
    y: 200,
    radius: 25,
    speed: 500,
    color: 'white'
  }
];

var keysDown = {};
window.addEventListener('keydown', function(e) {
  keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
  delete keysDown[e.keyCode];
});

window.addEventListener('keyup', function(e) {
  delete keysDown[e.keyCode];
});

function update(mod) {
  //Movement for right paddle
  if (37 in keysDown && paddle[0].x > (platform.width / 2) + 32.5) {
    paddle[0].x -= paddle[0].speed * mod;
  }
  if (38 in keysDown && paddle[0].y > 30) {
    paddle[0].y -= paddle[0].speed * mod;
  }
  if (39 in keysDown && paddle[0].x < platform.width - 32.5) {
    paddle[0].x += paddle[0].speed * mod;
  }
  if (40 in keysDown && paddle[0].y < platform.height - 30) {
    paddle[0].y += paddle[0].speed * mod;
  }
  //Movement for left paddle
  if (65 in keysDown && paddle[1].x > 30) {
    paddle[1].x -= paddle[1].speed * mod;
  }
  if (87 in keysDown && paddle[1].y > 30) {
    paddle[1].y -= paddle[1].speed * mod;
  }
  if (68 in keysDown && paddle[1].x < (platform.width / 2) - 32.5) {
    paddle[1].x += paddle[1].speed * mod;
  }
  if (83 in keysDown && paddle[1].y < platform.height - 30) {
    paddle[1].y += paddle[1].speed * mod;
  }
}

function render() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, (platform.width / 2) - 2.5, platform.height);
  ctx.fillRect((platform.width / 2) + 2.5, 0, (platform.width /2), platform.height);
  
  ctx.beginPath();
  ctx.fillStyle = paddle[0].color;
  ctx.arc(paddle[0].x, paddle[0].y, paddle[0].radius, 0, 2*Math.PI);
  ctx.arc(paddle[1].x, paddle[1].y, paddle[1].radius, 0, 2*Math.PI);
  ctx.fill();
}

function run() {
  update((Date.now() - time) / 1000);
  render();
  time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);