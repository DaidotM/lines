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
