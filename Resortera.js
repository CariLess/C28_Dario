class Resortera {
    constructor(bodyA, pointB) {
        //Formato JSON
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.resortera = Constraint.create(options);
        World.add(mundo, this.resortera);
    }
    fly(){
        this.resortera.bodyA = null; 
    }
display(){
    var pointA = this.resortera.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3);
  //line(x1,y1,x2,y2);
  line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}