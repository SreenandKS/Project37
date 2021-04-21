class Form{
    constructor(){
        this.input = createInput("Favorite color");
        this.button = createButton('START');
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.input.position(displayWidth/2-50,displayHeight/2);
        this.color = this.input.value();
        this.button.position(displayWidth/2,displayHeight/2+100);
    }
    
}