var rs = require('readline-sync');
 
console.log("Welcome to : \"HOW MUCH DO YOU KNOW ME - BHANU TEJA\" ");

var username = rs.question("\nPlease enter your name: ");
console.log("\nHey! "+username+", Enjoy the quiz\n");

console.log("----------RULES----------")
console.log("# There are 3 levels,you need to qualify each level to go to the next");
console.log("\n# For every correct answer,you get 2 points and -1 for every wrong answer\n");

var score = 0;
var curr_high_score = 12;
console.log("----WELCOME TO LEVEL 1----\n");
function know_game(question,answer)
{
  var yourAnswer = rs.question(question);

  if(yourAnswer.toLowerCase() == answer.toLowerCase())
  {
     score = score+2;
     console.log("That's correct answer");
  }

  else{
    score = score-1;
    console.log("Oops, That's wrong ");
  }

  console.log("Your current Score is : ",score);
  console.log("---------------------------------")
}

var lq1 = [{question : "What's my surname? ",answer : "Panguluri"},
{question: "What's my birthyear? ",answer:"2000"},
{question: "Where do I live? ",answer:"Guntur"},
{question: "What's my nickname? ",answer:"Sunny"}];

var lq2 = [{question: "What's my favourite sport? ",answer: "Cricket"},
{question: "Who's my favourite cricketer? ",answer:"virat kohli"},
{question: "What's my favourite number? ",answer:"7"},
{question: "What's my favourite IPL team? ",answer:"RCB"}]

var lq3 = [{question: "Which's my Favourite Test playing Nation? ",answer:"England"},
{question: "Who's my favourite actor? ", answer:"kamal hassan"},
{question: "What's my favourite food? ",answer:"biryani"}];

for(var i=0;i<lq1.length;i++)
{
  know_game(lq1[i].question,lq1[i].answer);
}

console.log("\nFinal score after LEVEL 1 : ",score);

if(score >=5)
{
  console.log("\n----Welcome to LEVEL 2----\n");

   for(var i=0;i<lq2.length;i++)
   {
     know_game(lq2[i].question,lq2[i].answer);
   }

   console.log("\nFinal score after LEVEL 2 : ",score);

   if(score >= 10)
   {
       console.log("\n----Welcome to LEVEL 3----\n");

     for(var i=0;i<lq3.length;i++)
     {
       know_game(lq3[i].question,lq3[i].answer);
     }

     console.log("\nFinal score : ",score);
     console.log("Thanks for taking part :) ");
   }

   else
   {
     console.log("Sorry,You are not qualified for Level 3");
   }
}

else{
  console.log("Sorry,You are not qualified for Level 2");
}

if(score > curr_high_score)
{
 console.log("\nYou have beaten the Highest Score!")
 curr_high_score = score;
 console.log("\nCurrent Highest Score: ",curr_high_score);
}
