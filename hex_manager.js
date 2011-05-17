function hex_manager(tx,ty,size)
{
	this.maxx = tx;
	this.maxy = ty;
	this.the_grid = new Array(this.maxx);
	
	for(i=0;i<this.maxx;i++)
	{
		this.the_grid[i] = new Array(this.maxy);
	}
	
	for(i=0;i<this.maxx;i++)
	{
		for(j=0;j<this.maxy;j++)
		{
			this.the_grid[i][j] = new hex_block(i,j,size);
		}
	}
}
hex_manager.prototype.Update = function(x,y) 
{
	for(i=0;i<this.maxx;i++)
	{
		for(j=0;j<this.maxy;j++)
		{
			this.the_grid[i][j].Update(x,y);
		}
	}
}
hex_manager.prototype.Display = function(ctx) 
{
	//need to update this to only draw the on-screen hexes.
	
	for(i=0;i<this.maxx;i++)
	{
		for(j=0;j<this.maxy;j++)
		{
			this.the_grid[i][j].Display(ctx);
		}
	}
}