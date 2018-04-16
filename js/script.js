var moveX=0, moveY=0;

$(document).ready(function() {

  //id = setInterval(update,10);

  var x = new Pacman(0,0,25,25);

  //x.move();

  var dx=0.8,dy=0.8;

/*

    $(document).keydown(function(event) {
      console.log(event.which);
      switch (event.which) {
        case 37://sx
          moveX=-dx;
          moveY= 0;
          pacman.tx = pacman[3].tx;
          pacman.ty = pacman[3].ty;
          break;
        case 38://su
          moveY=-dy;
          moveX= 0;
          pacman.tx = pacman[1].tx;
          pacman.ty = pacman[1].ty;
          break;
        case 39://dx
          moveX= dx;
          moveY= 0;
          pacman.tx = pacman[2].tx;
          pacman.ty = pacman[2].ty;
          break;
        case 40://giu
          moveY= dy;
          moveX= 0;
          pacman.tx = pacman[4].tx;
          pacman.ty = pacman[4].ty;
          break;
        case 27:
          clearInterval(id);
      }

    });
*/
});

/*
function collision(){

  var f = false;
  if((pacman.x+pacman.w/2 > Math.abs(line.x-line.w/2))&&(true))//solo controllo per la x
    f = true;

    console.log(line.y - line.h/2);

  return f;
}*/

function update(){


  $("canvas").css('background-color', 'black');
  $("canvas").removeLayers();

  //pacman.x += moveX;
  //pacman.y += moveY;

  //console.log("x: "+pacman.x+"     y: "+pacman.y);

  //if(!collision()){

  //}

  $('canvas').addLayer({
    type: 'image',
    source: 'SheetV1.png',
    x:25,y:25
});


  $('canvas').drawLayers();




}
