class Bob{
	constructor(x,y,r)
	{
		var options={
			//restitution:0.3,
			friction:10,
			density:0.5,
			frictionAir: 0.004
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r/2), options)
		World.add(world, this.body);

	}
	display()
	{
			var sandpos=this.body.position;		
			push()
			translate(sandpos.x, sandpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}