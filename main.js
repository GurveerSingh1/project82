var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mouseEvent = "empty";
color = "black";
var width_of_line = 2;
var radius=40;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

     color = document.getElementById("color").value;
     width_of_line = document.getElementById("width_of_line").value;

     radius=document.getElementById("radius").value;


    mouseEvent = "mousedown";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y , radius, 0, 2 * Math.PI);
        ctx.stroke();
        console.log("Current possition of x and y cordinates = ");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        
    }

}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
