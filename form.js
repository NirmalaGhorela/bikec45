class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","enter your name");
        this.playButton = createButton("play");
        this.greeting = createElement("h2");
    }
    setElementPosition(){
        this.input.position(width/2-50,height/2-80);
        this.playButton.position(width/2-60,height/2-30);
        this.greeting.position(width/2-300,height/2-100);
        
    }
    setElementStyle(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
    }
    hide(){
        this.input.hide();
        this.playButton.hide();
        this.greeting.hide();
    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            this.greeting.html(massage);
         })
    }
    display(){
        this.setElementPosition();
        this.setElementStyle();
    }

}
