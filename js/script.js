var moveX=0, moveY=0;
function drawPacman(){
  $("canvas").drawImage({
    source:"img/pacman.png",
    x:250,y:280,
    sx:0,sy:0,
    sWidth:15,sHeight:17,
    width:25,height:25
  });
}

function drawMaze(){
  $("canvas").drawImage({
    source:"img/maze.png",
    x:250,y:250,
    width:400,height:450
  });
}

function create2DArray(rows) {
  var matrix = [];
  for(var i=0; i<rows; i++) {
      matrix[i] = [];
      for(var j=0; j<rows; j++) {
          matrix[i][j] = 0;
      }
  }
  return matrix;
}

$(document).ready(function() {


  id = setInterval(update,10);

  var dx=2,dy=2;


    /*
    37 sx
    38 up
    39 dx
    40 down
    */
    $(document).keydown(function(event) {
      console.log(event.which);
      switch (event.which) {
        case 37:
          moveX=-dx;
          moveY= 0;
          pacman.tx = 3;
          pacman.ty = 2;
          break;
        case 38:
          moveY=-dy;
          moveX= 0;
          pacman.tx = 2;
          pacman.ty = 43;
          break;
        case 39:
          moveX= dx;
          moveY= 0;
          pacman.tx = 2;
          pacman.ty = 22;
          break;
        case 40:
          moveY= dy;
          moveX= 0;
          pacman.tx = 3;
          pacman.ty = 62;
          break;
        case 27:
          clearInterval(id);
      }

    });

});

var pacman = {
  "type":"pacman",
  "x":25,"y":25,
  "tx":2,"ty":22,
  "tw":14,"th":15,
  "w":20,"h":20
}

var pacmans = {
  "type":"pacmandw",
  "tx":3,
  "ty":62,
  "tw":14,
  "th":14
}

var line = {
  "type":"line",
  "x":200,"y":25,
  "tx":119,"ty":384,
  "tw":10,"th":49,
  "w":9,"h":48
}

function collision(){


  var f = false;
  if(pacman.x+pacman.w/2>line.x-line.w/2)//solo controllo per la x
    f = true;

    console.log(line.y - line.h/2);

  return f;
}

function update(){

  $("canvas").css('background-color', 'black');
  $('canvas').clearCanvas();

  //console.log("x: "+pacman.x+"     y: "+pacman.y);

  if(!collision()){
    pacman.x += moveX;
    pacman.y += moveY;
  }
  $("canvas").drawImage({
    source:"img/spritesheet.png",
    x:pacman.x,y:pacman.y,
    sx:pacman.tx,sy:pacman.ty,
    sWidth:pacman.tw,sHeight:pacman.th,
    width:pacman.w,height:pacman.h
  });

  $("canvas").drawImage({
    source:"img/pacmanGridlines.png",
    x:line.x,y:line.y,
    sx:line.tx+2,sy:line.ty+2,
    sWidth:line.tw-3,sHeight:line.th-3,
    width:line.w,height:line.h
  });



}
