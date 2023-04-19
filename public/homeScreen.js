$('#createFlightBtn').click(function (e){
    e.preventDefault();
    $('#CF').modal('show');
});
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 0;

var airplane = '\u2708';
var airplaneWidth = c.measureText(airplane).width;

var yMin = 50;
var yMax = innerHeight - yMin;

$('#updateFlightBtn').click(function (e){
    e.preventDefault();
    updateAllFlight();
});

$('#deleteFlightBtn').click(function (e){
    e.preventDefault();
    reloadAllFlightPageDelete();
});
var y = Math.floor(Math.random() * (yMax - yMin)) + yMin;

//var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

function animate(){
    requestAnimationFrame(animate); // this creates a loop

    c.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas

    c.font = '64px Arial'; // draw the airplane
    c.fillStyle = '#f0ffff';
    c.fillText(airplane, x, y);

    x += 2;

    if ( x > innerWidth + airplaneWidth){ // if the airplane goes off the page, return to x coordinate of 0
        x = 0;
    }
}

animate();