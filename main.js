
var width;
var height;
var mouseX;
var mouseY;
var cameraX;
var cameraY;
var stats;
var cam;
var hm;

function handleKeyboardPress(e)
{
	if(!e) //fuck internet explorer
	{
		e = window.event;
	}
	
	if(e.keyCode == 37) // left
	{
		cam.LeftPressed();
		
	}
	if(e.keyCode == 38) // up
	{
		cam.UpPressed();
	}
	if(e.keyCode == 39) // right
	{
		cam.RightPressed();
	}
	if(e.keyCode == 40) // down
	{
		cam.DownPressed();
	}
}
function handleKeyboardRelease(e)
{
	if(!e) //fuck internet explorer
	{
		e = window.event;
	}
	
	if(e.keyCode == 37) // left
	{
		cam.LeftReleased();
		
	}
	if(e.keyCode == 38) // up
	{
		cam.UpReleased();
	}
	if(e.keyCode == 39) // right
	{
		cam.RightReleased();
	}
	if(e.keyCode == 40) // down
	{
		cam.DownReleased();
	}
}

function updateMouse(e)
{
	//reason why javascript blows -- does this even work in IE?
	if (e.layerX || e.layerX == 0) {
		mouseX = e.layerX;
		mouseY = e.layerY;
	} else if (e.offsetX || e.offsetX == 0) {
		mouseX = e.offsetX;
		mouseY = e.offsetY;
	}
}


function setup()
{
	var canvas = document.getElementById('gwa');
	canvas.addEventListener("mousemove",updateMouse,false);
	
	document.addEventListener("keydown",handleKeyboardPress,false);
	document.addEventListener("keyup",  handleKeyboardRelease,false);
	
	
	cam = new camera(); 
	hm = new hex_manager(20,15,50);
	
	//stats = new Stats();
	
	//document.getElementById('stats').appendChild( stats.domElement);
	
	setInterval(draw,1000/60);
	
	width = 800;
	height = 450;
	
	
}  


function draw(){
	var canvas = document.getElementById('gwa');
	//stats.update();
	cam.Update();
	cameraX = cam.getX();
	cameraY = cam.getY();
	
	
	var div = document.getElementById('txt');
	div.innerHTML = "mx: " + mouseX + " my: " + mouseY + " cx: " + cameraX + " cy: " + cameraY;
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
		
		ctx.clearRect(0,0,width,height);
		ctx.fillStyle = 'rgba(10,10,10,1)';
		ctx.fillRect(0,0,width,height);
		
		
		
		ctx.save();
		ctx.translate(cameraX,cameraY);
		//ctx.rotate(Math.PI/4.0);
		//ctx.scale(1.0,.75);
		//ctx.transform(1,0,-.75,1,0,0);
		
		hm.Update(mouseX-cameraX,mouseY-cameraY);
		
		hm.Display(ctx);
		ctx.restore();
	}
	
}