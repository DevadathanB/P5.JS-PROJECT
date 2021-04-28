function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(180, 40, 80, 100, 40);
    pop();
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(90, 420, 80, 100, 40);
    pop();

    function star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = x + cos(a) * radius2;
            let sy = y + sin(a) * radius2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }


}

function take_snapshot() {
    save("my_selfie.png")
}