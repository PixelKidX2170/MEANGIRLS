class Form {

  constructor() {
    this.input = createInput("Put your name so we can steal it");
    this.button = createButton('VROOOOOOOOOOOOOOOOm');
    this.bonny = createButton('RETRY AND FAIL');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Random not Shady Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.bonny.position(displayWidth/2 + 83, displayHeight/2);
    this.bonny.mousePressed(()=>{
      game.update(0)
      player.updateCount(0)
      });
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Sometimes " + player.name + " Plays strange games")
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
