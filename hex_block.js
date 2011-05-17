function hex_block(_x,_y,_size)
{
	this.x = _x;
	this.y = _y;
	this.blockSize = _size;
	this.r = Math.floor(Math.random()*256);
	this.g = Math.floor(Math.random()*256);
	this.b = Math.floor(Math.random()*256);
	this.selected = 0;
	this.p0 = new Array();
	this.p1 = new Array();
	this.p2 = new Array();
	this.p3 = new Array();
	this.p4 = new Array();
	this.p5 = new Array();
	this.pc = new Array();
	
	var sl = Math.tan(Math.PI/6.0) * this.blockSize;
	var oh = Math.sin(Math.PI/6.0) * sl;
	
	var sx = this.x * this.blockSize;
	
	if(this.y%2==0)
	{
		var sy = (this.y/2) * (sl + sl + oh + oh);
	}
	else
	{
		sx += 0.5 * this.blockSize;
		var sy = ((this.y-1)/2) * (sl + sl + oh+ oh);
		sy += (sl + oh);
	}
	
	this.p0[0] = sx;
	this.p0[1] = sy;
	
	this.p1[0] = sx + (0.5 * this.blockSize);
	this.p1[1] = sy - oh;
	
	this.p2[0] = sx + this.blockSize;
	this.p2[1] = sy;
	
	this.p3[0] = sx + this.blockSize;
	this.p3[1] = sy + sl;
	
	this.p4[0] = sx + (0.5 * this.blockSize);
	this.p4[1] = sy + sl + oh;
	
	this.p5[0] = sx;
	this.p5[1] = sy + sl;
	
	this.pc[0] = (this.p0[0] + this.p2[0])/2.0;
	this.pc[1] = (this.p1[1] + this.p4[1])/2.0;	
	
}

hex_block.prototype.Update = function(x,y)
{
	if(x > this.p0[0] && x < this.p2[0] && y > this.p1[1] && y < this.p4[1])
	{
		var dx = this.pc[0] - x;
		var dy = this.pc[1] - y;
		
		//dx^2
		dx = dx * dx;
		//dy^2
		dy = dy * dy;
		
		var dist = dy + dx;
		dist = Math.sqrt(dist);
		
		if(dist < (this.blockSize /2.0))
		{
			this.selected =1;
		}
		else
		{
			this.selected = 0;
		}
		
	}
	else
	{
		this.selected = 0;
	}
}

hex_block.prototype.Display = function(ctx)
{
	ctx.save();
	
	if( this.selected > 0 )
	{
ctx.strokeStyle = '#DDD';	
	ctx.fillStyle = '#FFF'
	}
	else
	{
		ctx.strokeStyle = '#EEE';
		//ctx.fillStyle = 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
		ctx.fillStyle = '#444';
	}
	
	ctx.beginPath();
	ctx.moveTo(this.p0[0],this.p0[1]);
	ctx.lineTo(this.p1[0],this.p1[1]);
	ctx.lineTo(this.p2[0],this.p2[1]);
	ctx.lineTo(this.p3[0],this.p3[1]);
	ctx.lineTo(this.p4[0],this.p4[1]);
	ctx.lineTo(this.p5[0],this.p5[1]);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	ctx.font = "12px";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = '#000';
	ctx.fillText("[" + this.x + "," + this.y +"]",this.pc[0],this.pc[1]);
	
	ctx.restore();
	//ctx.lineTo(this.p0[0],this.p0[1]);
}