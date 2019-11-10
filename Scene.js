function Scene(id,left,top,width,height,backgroundColor,borderStyle) {
      this.divWrapper = document.createElement('div');
      this.divWrapper.id = "DIV_" + id;
      this.divWrapper.style.position = "absolute";
      this.divWrapper.style.left = "0px";
      this.divWrapper.style.top = "0px";
      this.divWrapper.style.width = width;
      this.divWrapper.style.height = height;
      
      this.canvasDOM = document.createElement("canvas");
      this.canvasDOM.id = id;
      this.canvasDOM.width = width;
      this.canvasDOM.height = height;
      this.ctx = this.canvasDOM.getContext("2d");
      this._left = left;
      this._top = top;
      this.bgColor = backgroundColor;
      this.canvasDOM.style.border = borderStyle;
      
      this.divWrapper.appendChild(this.canvasDOM);
      
      this.sprites = [];
}

Scene.prototype.getDivDOM = function() {
   return this.divWrapper;
}

Scene.prototype.getCanvasDOM = function() {
	 console.log(this.canvasDOM);
   return this.canvasDOM;
}
   
Scene.prototype.render = function() {
    this.clear();
    
    let spcnt = this.sprites.length;
    for(x=0;x<spcnt;x++) {
    	this.sprites[x].render(this.ctx);
    }	
}
   
Scene.prototype.clear = function() {
   this.ctx.clearRect(0, 0, this.canvasDOM.width, this.canvasDOM.height);
}
   
Scene.prototype.update = function(progress) {
    let spcnt = this.sprites.length;
    for(x=0;x<spcnt;x++) {
    	this.sprites[x].update(progress);
    } 	
}
   
Scene.prototype.coord = function() {
   //return {this._left, this._top};
}
   
Scene.prototype.addChild = function(sprite) {
   this.sprites.push(sprite);
}
