class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder","enter your name");
        this.playButton = createButton("play");
        this.greeting = createElement("h2");
    }
    setElementPosition(){
        this.input.position(width/2-90,height/2-80);
        this.playButton.position(width/2-30,height/2+30);
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
            var massage = `Hello ${this.input.value()}
            <br>waiting for another player to join....`
            this.greeting.html(massage);
            playerCount +=1;
            player.name = this.input.value();
            player.index = playerCount;
            player.addPlayer();
            player.updateCount(playerCount);
            player.getDistance();
         })
    }
    display(){
        this.setElementPosition();
        this.setElementStyle();
        this.handleMousePressed();
     }

}
