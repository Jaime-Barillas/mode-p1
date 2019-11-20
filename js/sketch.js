var canvas;
var angle = 0;

function setup() {
    canvas = createCanvas(400, 200);
    canvas.style('display', 'block');
    canvas.parent('animation');

    angleMode(RADIANS);
    frameRate(24);
    fill(48);
    noStroke();
}

function update() {
    angle += QUARTER_PI * (deltaTime / 1000);
}

function drawFork() {
    rect(-10, -30, 20, 100, 15);
    rect(-20, -45, 40, 30, 0, 0, 10, 10);
    rect(-20, -70, 10, 30, 5, 5, 0, 0);
    rect(-5, -70, 10, 30, 5, 5, 0, 0);
    rect(10, -70, 10, 30, 5, 5, 0, 0);
}

function drawKnife() {
    rect(-10, -30, 20, 100, 15);
    rect(-20, -80, 30, 90, 15);
}

function draw() {
    update();

    clear();
    translate(width / 2, height / 2);

    translate(-100, 0);
    rotate(angle);
    drawFork();

    rotate(-angle);

    translate(200, 0);
    rotate(-angle);
    drawKnife();
}
