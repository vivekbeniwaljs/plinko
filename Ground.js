class Ground {
 constructor(x,y,width,height){
    var option  = {
     'restitution':0,
     'friction':0,
     'density':1
    }
this.body = Bodies.rectangle(x,y,width,height,option)
this.width = width
this.height = height

world.add(world, this.body)
 }
  display(){
    rectMode(CENTER)
    fill(255)
    var pos = this.body.position
    rect(this.body.position.x,this.body.position.x, this.width,this.height)
  }


}