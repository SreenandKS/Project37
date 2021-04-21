class Game{
    constructor(){

    }
    play(){
        
        
        if(gameState===1){
            
            
            console.log(camera.position.y);
           if(keyDown(UP_ARROW)){
           
               player.y += 30;
               camera.position.x = displayWidth/2;
               camera.position.y = player.y;
           }
           
        }
      
    }

   
}