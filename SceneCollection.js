function SceneCollection() {
     this.scenes = [];
     this.numberOfScenes = 0;
}
   
SceneCollection.prototype.addScene = function(scene) {
   this.scenes.push(scene);
   this.numberOfScenes++;
   
   document.body.appendChild(scene.getDivDOM());
}
   
SceneCollection.prototype.removeScene = function(id) {
   	
}
   
SceneCollection.prototype.update = function(progress) {
   for(i=0;i<this.numberOfScenes;i++) {
      this.scenes[i].update(progress);
   }		
}
  
SceneCollection.prototype.render = function() {
   for(i=0;i<this.numberOfScenes;i++) {
     	this.scenes[i].render();
   }	
}

