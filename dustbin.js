class Dustbin {

    constructor(x,y,width,height) {

    var options={

    isStatic:true,
    friction:2,
     density:5
      
    }
    this.image = loadImage("sprites/dustbingreen.png");
this.body = Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
World.add(world,this.body);
}

display() {
var pos= this.body.position;
push();
translate(pos.x,pos.y)
imageMode(CENTER);
//fill('red')
image(this.image,0,0,this.width,this.height);
//rect(0,0,this.width,this.height);
pop();

}

}