var SPRITE_TYPE = {
	fillrect : 1,
	rect : 2,
	sprite : 3
};

function createBoundary(xb,yb,widthb,heightb) {
	return { x: xb, y : yb, width : widthb, height : heightb };
}

function Sprite(id,x,y,width,height,type,color="blue") {
  this.id = id;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.type = type;  
   
  this.boundary = {};
  this.gravity = { x : 0, y : 0 };
  this.rotation = { enabled : false, angle : 0, centerX: this.width / -2, centerY : this.height / -2 };
}

Sprite.prototype.render = function(ctx) {   
	 if (this.rotation.enabled) {
	    ctx.save();
      ctx.translate(this.x, this.y);        
      ctx.rotate(this.rotation.angle);
   
      if (this.type == SPRITE_TYPE.fillrect) {
   	     ctx.fillStyle = this.color;
         ctx.fillRect(this.rotation.centerX,this.rotation.centerY,this.width,this.height); 
      }   	
	 
      ctx.restore();    
   } else {
   	  if (this.type == SPRITE_TYPE.fillrect) {
	       ctx.fillStyle = this.color;
         ctx.fillRect(this.x,this.y,this.width,this.height);
      }
   }
}

Sprite.prototype.update = function(delta) {
   
}

Sprite.prototype.setColor = function(color) {
	 this.color = color;
}

Sprite.prototype.addBoundary = function(xb,yb,wb,hb) {
	 this.boundary = createBoundary(xb,yb,wb,hb);
}

Sprite.prototype.setRotation = function(enabled,angle,centerX,centerY) {
	 this.rotation = { enabled : enabled, angle : angle, centerX: centerX, centerY : centerY };
}