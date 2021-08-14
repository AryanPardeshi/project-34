class Form{
    constructor(){

    }

    display(){
        var title=createElement('H2')
        title.html("car raceing game");
        title.position(130,0);
        var input=createInput("name");
        input.position(130,160);
        var button=createButton("play");
        button.position(250,200);
        var gretting=createElement('H3')
        button.mousePressed(function (){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            gretting.html("hello " + name);
            gretting.position(130,160);
        });


    }

}