let lineX = document.getElementById('lineX');
let lineY = document.getElementById('lineY');

const onMouseMove = (e) =>{
    var left = e.pageX+"px";
    var top = e.pageY+"px";
    lineX.style.left = left;
    lineY.style.top = top;
}

document.addEventListener('mousemove', onMouseMove);