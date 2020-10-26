class Stone{

    constructor(x,y){

        var op={

            isStatic:false,
            restitution:0,
            friction:1

        }

        this.body=Bodies.rectangle(x,y,20,20,op);
        this.width=20;
        this.height=20;
        
        World.add(world,this.body);

    }

    display(){

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);


    }















}