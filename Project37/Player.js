class Player {
    constructor(x,y,width,height){
        this.pl = createSprite(x,y,width,height);
        this.pl.visible = false;
        this.color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        form = new Form();
    }
    start(){
        this.color = form.input.value();
        form.button.mousePressed(()=>{
            gameState = 1;
            form.hide();
            this.pl.visible = true;
            this.pl.shapeColor = this.color;
        })
        
    }
    
       }
