let lineX = document.getElementById('lineX');
let lineY = document.getElementById('lineY');

const onMouseMove = (e) => {
    var left = e.pageX + "px";
    var top = e.pageY + "px";
    lineX.style.left = left;
    lineY.style.top = top;
}
document.addEventListener('mousemove', onMouseMove);

//click to stop the listener and draw the lines in pageX and pageY
const onClick = (e) => {
    var left = e.pageX + "px";
    var top = e.pageY + "px";
    lineX.style.left = left;
    lineY.style.top = top;
    document.removeEventListener('mousemove', onMouseMove);
}
document.addEventListener('click', onClick);

//double click recovers the listener from the click
const doubleClick = (e) => {
    document.addEventListener('mousemove', onMouseMove);
}
document.addEventListener('dblclick', doubleClick);

//RULER TEST
function drawOnCanvas(y) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(20, y);
    ctx.stroke();
}
function drawRuler() {
    var ppm = 8.602150744349842,
        count = Math.floor(c.height / ppm);

    for (var i = 0; i < count; i++) {
        var topPos = (5 + i * ppm);
        drawOnCanvas(Math.floor(topPos) + .5);
    };

}
function resizeCanvas() {
    c.width = document.body.clientWidth - 5,
        c.height = document.body.clientHeight - 5;
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.lineWidth = 1;

resizeCanvas();
drawRuler();