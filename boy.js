class Boy{

    constructor(x,y,width,height){

        var op={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,op);
        this.height=height;
        this.width=width;

        World.add(world,this.body);

        this.image=loadImage("boy.png");

    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);




    }


}