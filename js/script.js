var moveX=0, moveY=0;

$(document).ready(function() {

  id = setInterval(update,10);

  //x.move();

  var dx=0.8,dy=0.8;



  $(document).keydown(function(event) {
      console.log(event.which);

      //if(event.which == 27) Arena.pause();
      pacman.setDir(event.which);

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
    source: 'img/SheetV1.png',
    x:25,y:25
});


  $('canvas').drawLayers();




}
