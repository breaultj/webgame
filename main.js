let sprite1 = new Sprite("sprite1",80,75,50,50,SPRITE_TYPE.fillrect,"blue");
sprite1.setRotation(true,0,-25,-25);

let sprite2 = new Sprite("sprite2",75,70,10,10,SPRITE_TYPE.fillrect,"red");
sprite2.setRotation(false,0,0,0);

function gameLoop(timestamp) {
  var progress = timestamp - lastRender;

  scenes.update(progress);
  sprite1.rotation.angle += 1 * Math.PI / 180; 
  
  scenes.render();

  lastRender = timestamp;
  window.requestAnimationFrame(gameLoop);
}

var lastRender = 0;
var scenes = new SceneCollection();

function startGame() {

let mainCanvas = new Scene("main",0,0,400,400,"red","1px solid black");

mainCanvas.addChild(sprite1);
mainCanvas.addChild(sprite2);

scenes.addScene(mainCanvas);

window.requestAnimationFrame(gameLoop);
}