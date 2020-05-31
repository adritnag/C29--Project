class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        World.add(world, this.sling);

    }

    attach(bodyA){
        this.sling.bodyA = bodyA;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x>=200){
                
                strokeWeight(4);
            } else{
                strokeWeight(10);
            }
            stroke(68, 221, 202);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
            
            
        }

    }
    
}