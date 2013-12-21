$(function(){
	render();
	run();
});

function update(mod) {

}

function render(ctx, puck) {
	var platform = document.getElementById('platform');
	var ctx = platform.getContext('2d');
	
	var puck = {
		x: 200,
		y: 200,
		radius: 40,
		speed: 200,
		color: 'red'
	};

	ctx.fillRect(0, 0, platform.width, platform.height);
	ctx.fillStyle = puck.color;
	ctx.arc(puck.x, puck.y, puck.radius, 0, 2*Math.PI);
	ctx.fill();
}

function run() {
	var time = Date.now();
	setInterval(run, 10);

	update((Date.now() - time) / 1000);
	render();
	time = Date.now();
}