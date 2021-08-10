class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the stone
	var options = {
        resticution:0.8,
		friction:0.9,
		density:12


	}
		
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(x,y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos =this.body.position;	
			var angle = this.body.anngle;

			push()
			translate(stonepos.x,stonepos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the rectangle here to display the stone
            rect(0,0,this.width,this.height)
			pop()
	}

}