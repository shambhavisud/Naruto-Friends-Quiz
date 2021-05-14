let chalk = require('chalk');
let readlineSync = require('readline-sync');
let userName = readlineSync.question("Enter your name\n");
let choice = readlineSync.question("\nDo you want a Naruto-quiz or a F.R.I.E.N.D.S Quiz?(n(for Naruto)/f(for Friends)\n");




let questionColor = chalk.bgYellowBright.blue.bold;

let score=0;
let level=1;

let topScorers = ['Shambhavi','Tejaswi','Aaryaman'];


let checkAnswer = (options,question,answer) => {

  console.log('\n' + questionColor(question) + '\n');

  let userAnswer = readlineSync.keyInSelect(options,'Choose the right option: ',{cancel:false});
  if (Number(userAnswer) === answer){
    score++;
    console.log(chalk.greenBright.bold('\nYou are absolutely right!'));

    if(score>=5 && score <10){
       level=2;
    }
   
    else if(score==10){
      level=3;
      console.log(chalk.blue.bold.bgWhite("You are a TOP-SCORER!"))
      topScorers.push(userName);
    }
    
  console.log(chalk.yellow.bold("Score: "),score,chalk.yellow.bold("    Level: "),level);
  }
    
  else{
    console.log(chalk.red.bold('\nYour answer is wrong!'));
    
  console.log(chalk.yellow.bold("Score: "),score,chalk.yellow.bold("    Level: "),level);
    }
    
  }
    
  

let printQues = (QuesArray) =>{
    for (var i = 0; i < QuesArray.length; i++) {
		checkAnswer(QuesArray[i].options,QuesArray[i].question, QuesArray[i].answer);
	}
  }
  
if (choice.toUpperCase() === "N".toUpperCase()){
  console.log("\nWelcome", chalk.red.underline.bold(userName),"to the Naruto quiz.\n");

  

  var questionsNaruto = [
    {
      
      question: "Which Hokage sealed the nine-tailed fox inside Naruto?",
      options : ["first Hokage", "second Hokage" ,"fourth Hokage" ,"third Hokage"],
      answer: 2,
    },
    {
      
      question: "Who tricked Naruto into stealing a sacred scroll?",
      options : ["Iruka", "Zabuza" ,"Sasuke" ,"Mizuki"],
      answer: 3,
    },
    {
      
      question: "Which character can only use taijutsu?",
      options : ["Naruto Uzumaki", "Gaara" ,"Sasuke Uchiha" ,"Rock Lee"],
      answer: 3,
    },
    {
   
      question: "Naruto first shows his nine-tails chakra when he fights who?",
      options : ["Neji Hyuga", "Sasuke Uchiha" ,"Haku" ,"Rock Lee"],
      answer: 2,
    },
    {
      
      question: "What is the relationship between Naruto and Iruka?",
      options : ["All of these", "Their parents were killed when they were younger" ," Iruka was Naruto's teacher" ,"were both class clowns"],
      answer: 0, 
    },
    {
      
      question: "What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?",
      options : ["Shadow Lotus", "Lotus of Destruction " ," Fiery Lotus" ,"Primary Lotus"],

      answer: 3,
    },
    {
      
       question: "Which of the following ninjas is a kunoichi?",
      options : ["Orochimaru", "Naruto Uzumaki" ,"Sakura Haruno" ,"Gaara"],



      answer: 2,
    },
    {
      
       question: "Sasuke's goal is gain enough power to kill whom?",
      options : ["Itachi Uchiha", "Neji Hyuuga" ,"Naruto Uzumaki" ,"The Third Hokage"],

      answer: 0,
    },
    {
      
       question: "What does 'Chidori' mean?",
      options : ["five hundred punches", "one thousand birds" ,"five thousand swords" ,"Ten thousand stones"],

      answer: 0,
    },
    {
      
       question: "Which of the legendary sannin becomes the fifth Hokage?",
      options : ["Tsunade", "Orochimaru" ,"Jiraya" ,"Naruto becomes the 5th Hokage"],

      answer: 0
    },
  ];
  


  printQues(questionsNaruto);
}


else
{

  console.log("\nWelcome",chalk.red.underline.bold(userName),"to the F.R.I.E.N.D.S tv quiz.\n");

  console.log(chalk.yellowBright.bold("RULES\n"), "Q: A question with 4 options :\na) Option1\nb) Option2\nc) Option3\nd) Option4\nAns: a\nScore: 1\nLevel: 1\n\nThere is a system of levels also in this quiz, as you answer 5 questions correctly, you will advance to next level.\n");

  var questionsFriends = [
    {
      
       question: "To get over Richard, what did Monica start making?",
      options : ["Pancakes", "Marmalade" ,"Jam" ,"Candy"],

      answer: 2,
    },
    {
      
       question: "What was the name of the self help book that the girls loved?",
      options : ["Be Your Own Windkeeper", "Be Your Own Lightning Bearer" ,"Be Your Own Cleansing Pool" ,"Be Your Own Person"],

      answer: 0,
    },
    {
      
       question: "Where was the 'Aroma' room?",
      options : ["Phoebe's dollhouse", "Monica's apartment" ,"Monica's dollhouse" ,"Phoebe's apartment"],

      answer: 0,
    },
    {
      
       question: "What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?",
      options : ["Shadow Lotus", "Lotus of Destruction " ," Fiery Lotus" ,"Primary Lotus"],

      answer: 3,
    },
    {
      
       question: "What was wrong with the couch Ross returned to the store?",
      options : ["The colour was wrong", "It had a stain" ,"It was cut in half" ,"It was torn"],

      answer: 2, 
    },
    {
      
       question: "What was the name of Eddie's ex-girlfriend?",
      options : ["Tina", "Tillie" ,"Tanya" ,"Tara"],

      answer: 1,
    },
    {
      
       question: "How many long-stemmed roses did Ross send to Emily?",
      options : ["86", "100" ,"72" ,"52"],

      answer: 2,
    },
    {
      
       question: "What was Phoebe in charge of at Rachel's surprise party?",
      options : ["Shadow Lotus", "cups and ice" ," cups and food" ,"ice and food"],

      answer: 1,
    },
    {
      
       question: "What was the name of the Photographer who almost moved in with Chandler?",
      options : ["Eddie", "Eric" ,"eva" ,"Enio"],

      answer: 1,
    },
    {
      
       question: "Who did Phoebe think would have very hairy children?",
      options : ["Chandler and Monica", "Chandler and Janice" ," Janice and Ross" ,"Joey and Monica"],

      answer: 2,
    },

  ];

  printQues(questionsFriends);

}


let PrintTopPlayers = (topScorers) => {
    
    console.log(chalk.bgRed("\n TOP SCORERS \tSCORE "));
    for(var i = 0; i <topScorers.length; i++) {
      console.log(chalk.yellowBright.bold("\n "+topScorers[i]+"\t\t\t"+" 10"));
    }

}
console.log(
	chalk.yellowBright.bold('\nQUIZ COMPLETE!!! Here are the results: ')
);

PrintTopPlayers(topScorers);

