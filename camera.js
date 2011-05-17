
function camera()
{
	this.x = 0.0;
	this.y = 0.0;
	
	this.maxSpeed = 15.0;
	this.speedGain = 2.5;
	this.speedLoss = 4.0;
	this.currentSpeedX = 0.0;
	this.currentSpeedY = 0.0;
	
	this.right 	= false;
	this.left 	= false;
	this.up 	= false;
	this.down 	= false;
	
}

camera.prototype.Update = function() 
{
	//update x movement...
	if(this.left && !this.right)
	{
		this.currentSpeedX -= this.speedGain;
	}
	else if( this.right && !this.left)
	{
		this.currentSpeedX += this.speedGain;
	}
	else
	{
		//decrease to zero
		if(Math.abs(this.currentSpeedX) < this.speedLoss)
		{
			this.currentSpeedX = 0;
		}
		else if( this.currentSpeedX > 0)
		{
			this.currentSpeedX -= this.speedLoss;
		}
		else
		{
			this.currentSpeedX += this.speedLoss;
		}
	}
	
	if(this.up && !this.down)
	{
		this.currentSpeedY -= this.speedGain;
	}
	else if( this.down && !this.up)
	{
		this.currentSpeedY += this.speedGain;
	}
	else
	{
		//decrease to zero
		if(Math.abs(this.currentSpeedY) < this.speedLoss)
		{
			this.currentSpeedY = 0;
		}
		else if( this.currentSpeedY > 0)
		{
			this.currentSpeedY -= this.speedLoss;
		}
		else
		{
			this.currentSpeedY += this.speedLoss;
		}
	}
	
	if(this.currentSpeedX > this.maxSpeed)
	{
		this.currentSpeedX = this.maxSpeed;
	}
	
	if(this.currentSpeedX < -this.maxSpeed)
	{
		this.currentSpeedX = -this.maxSpeed;
	}
	
	if(this.currentSpeedY > this.maxSpeed)
	{
		this.currentSpeedY = this.maxSpeed;
	}
	
	if(this.currentSpeedY < -this.maxSpeed)
	{
		this.currentSpeedY = -this.maxSpeed;
	}
	
	this.x += this.currentSpeedX;
	this.y += this.currentSpeedY;
}


camera.prototype.DownPressed = function ()
{
	this.down = true;
}

camera.prototype.UpPressed = function () 
{
	this.up = true;
}

camera.prototype.RightPressed = function () 
{
	this.right = true;
}

camera.prototype.LeftPressed = function ()
{
	this.left = true;
}

camera.prototype.UpReleased = function () 
{
	this.up = false;
}

camera.prototype.DownReleased = function ()
{
	this.down = false;
}

camera.prototype.RightReleased = function () 
{
	this.right = false;

}

camera.prototype.LeftReleased = function ()
{
	this.left=false;
}

camera.prototype.getX = function()
{
	return this.x;
}

camera.prototype.getY = function()
{
	return this.y;
}