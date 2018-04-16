class Pacman extends Actor{

  constructor(x,y,w,h){
    super(x,y);
    this.w = w;
    this.h = h;
    this.frames = new Array();
    this.cont = 0;
    this.init();
  }

  init(){
    $.getJSON('/js/sprites.json', function(json) {
        /*optional stuff to do after success */
        //for(var i=0; i<json.pacman.length; i++)
    });
  }


  move(){

  }

}
