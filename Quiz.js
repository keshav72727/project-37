class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background(255);
    //write code to show a heading for showing the result of Quiz
    textSize(20);
    text("result of the quiz :",500,200);
    //call ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined){
      var displayAnswer = 230;
      textSize(10);
      text("*note :- contestents who answered correct is highlighted in green",)
      
      for (var plr in allContestants){
        var correctAns = "2"
        if (correctAns === allContestants[plr].answer){
          fill("green");
        }
        else{
          fill("red");
        }
        displayAnswer =+ 30;
        textSize(15);
        text(allContestants[plr].name + ": " + allPlayers[plr].answer, 120,displayAnswer);
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
