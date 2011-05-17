function game_engine(_name, _maxfps, _c) {
	//constructor with name...
	this.name = _name;
	this.target_fps = _maxfps;
	this.context = _c;
	//this.tile_manager = new tile_manager();
	//this.renderer = new renderer(this.context);
	//this.ui = new ui(this.context);
	//this.log = new log(file);
	//this.contextmenu = new contextmenu(this.context);
	//this.keyboardhandler = new keyboardhandler();
	//this.mousehandler = new mousehandler(hold_time);
	//this.localplayer = new player();
	//this.enemies = new array();
	//this.musichandler = new musichandler();
	//this.soundeffects = new soundeffects();
	//this.profiler = new profiler();
}

//this is more of a soft init and kicks off the update sequence
//memory is already allocated from the constructor above.
game_engine.prototype.Init = function () {
	//do init;
	setInterval(this.Update(), 1000 / this.target_fps);
}

game_engine.prototype.Update = function () {
	//update all
	
	//display all
}

//how could you actually call this...
game_engine.prototype.Finalize = function() {
	//close it all down, chief
}