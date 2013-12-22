var platform = document.getElementById('platform');
var ctx = platform.getContext('2d');

var paddle = [];

var paddle1 = {
	x: 200,
	y: 200,
	radius: 40,
	speed: 1000,
	color: 'red'
}

var paddle2
 
var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
 
function update(mod) {
    if (37 in keysDown) {
        puck.x -= puck.speed * mod;
    }
    if (38 in keysDown) {
        puck.y -= puck.speed * mod;
    }
    if (39 in keysDown) {
        puck.x += puck.speed * mod;
    }
    if (40 in keysDown) {
        puck.y += puck.speed * mod;
    }
    if () {

    }
    if () {
    	
    }
    if () {
    	
    }
    if () {
    	
    }
}
 
function render() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, platform.width, platform.height);
    ctx.fillStyle = puck.color;
    ctx.beginPath();
    ctx.arc(puck.x, puck.y, puck.radius, 0, 2*Math.PI);
    ctx.fill();
}
 
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);