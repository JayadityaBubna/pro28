class Tree{

    constructor(x,y){
    
        var op={
            isStatic:true,
            restitution:0,
            friction:1
        }
    
        this.body=Bodies.rectangle(x,y,20,20,op);
        this.height=20;
        this.width=20;

        
    
        World.add(world,this.body);
    
        }
    
        display(){
            
         rectMode(CENTER);
         rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    
    
        }
    
    }
    
    















