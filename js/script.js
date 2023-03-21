let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;
let questions = quiz.sort(function(){
    return 0.5 - Math;
});

let totalQuestion = questions.length;


$(function (){
    // timer code starts from here

    let totalTime = 2000;
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval( function () {
        counter++;
        min = Math.floor((totalTime - counter) / 60);
        sec = totalTime - min * 60 - counter;

        // console.log("min = " + min);
        // console.log("sec = " + sec);

        $(".timerBox span").text(min + ":" + sec);
        if(counter == totalTime){

            alert("Time's Up. Press ok to show result");
            result();
            clearInterval(timer);
        }


    }, 1000);



    //print question
    printQuestion(index);


});


// Function to print question start

function printQuestion(i){
    // console.log(questions[0]);
    $(".paralBox").text(questions[i].para);
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);

}

//Function to play video on basis of index no. of question starts from here

function playVid(i) { 
  if (index == 0){
    $("#hint1").hide()
    $("#vidHint").hide()
    $("#stl_cont0").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show();   
    $("#myVideoQ1").show();
  } else if (index == 1) {
    $("#hint2").hide()
    $("#vidHint").hide()
    $("#stl_cont1").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ2").show();
  } else if (index == 2) {
    $("#hint3").hide()
    $("#vidHint").hide()
    $("#stl_cont2").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ3").show();
  } else if (index == 3) {
    $("#hint4").hide()
    $("#vidHint").hide()
    $("#stl_cont3").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ4").show();
  } else if (index == 4) {
    $("#hint5").hide()
    $("#vidHint").hide()
    $("#stl_cont4").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ5").show();
  } else if (index == 5) {
    $("#hint6").hide()
    $("#vidHint").hide()
    $("#stl_cont5").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ6").show();
  } else if (index == 6) {
    $("#hint7").hide()
    $("#vidHint").hide()
    $("#stl_cont6").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ7").show();
  } else if (index == 7) {
    $("#hint8").hide()
    $("#vidHint").hide()
    $("#stl_cont7").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ8").show();
  } else if (index == 8) {
    $("#hint9").hide()
    $("#vidHint").hide()
    $("#stl_cont8").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ9").show();
  } 
  else{
    $("#hint10").hide()
    $("#vidHint").hide()
    $("#stl_cont9").show();
    $("#vidHideNext").hide();
    $("#vidHideResult").hide();  
    $("#vidHide").hide();
    $("#boxQuestion").hide();  
    $("#boxOption").hide();  
    $("#vidShow").show(); 
    $("#myVideoQ10").show();
  }

  
} 


function hintVid(i) { 
  if (index == 0){
    $("#hint1").show();
  } else if (index == 1){
    $("#hint2").show();
  }else if (index == 2){
    $("#hint3").show();
  }else if (index == 3){
    $("#hint4").show();
  }else if (index == 4){
    $("#hint5").show();
  }else if (index == 5){
    $("#hint6").show();
  }else if (index == 6){
    $("#hint7").show();
  }else if (index == 7){
    $("#hint8").show();
  }else if (index == 8){
    $("#hint9").show();
  }else {
    $("#hint10").show();
  }


}

// function showNext(i) {
//   if (index == 0) {
//     $("#stl_cont0").hide();
//     $("#stl_cont1").show();
//   }
// }


//Function to play video on basis of index no. of question ends from here


//Function to go back to question from the video starts from here

function stopVid(i) {
  if (index == 0) {
    $("#vidHint").show()
    $("#stl_cont0").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ1").hide();
  } else if (index == 1) {
    $("#vidHint").show()
    $("#stl_cont1").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ2").hide();
  } else if (index == 2) {
    $("#vidHint").show()
    $("#stl_cont2").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ3").hide();
  } else if (index == 3) {
    $("#vidHint").show()
    $("#stl_cont3").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ4").hide();
  } else if (index == 4) {
    $("#vidHint").show()
    $("#stl_cont4").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ5").hide();
  } else if (index == 5) {
    $("#vidHint").show()
    $("#stl_cont5").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ6").hide();
  } else if (index == 6) {
    $("#vidHint").show()
    $("#stl_cont6").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ7").hide();
  } else if (index == 7) {
    $("#vidHint").show()
    $("#stl_cont7").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ8").hide();
  } else if (index == 8) {
    $("#vidHint").show()
    $("#stl_cont8").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ9").hide();
  }
  else {
    $("#vidHint").show()
    $("#stl_cont9").hide();
    $("#vidHideNext").show();
    $("#vidHideResult").show();
    $("#vidHide").show();
    $("#boxQuestion").show();
    $("#boxOption").show();
    $("#vidShow").hide();
    $("#myVideoQ10").hide();
  }


}

//Function to go back to question from the video starts from here



//Function to check answers starts here

function checkAnswer(option){
    attempt++;
    let optionClicked = $(option).data("opt");

  if (optionClicked == questions[index].answer) {
    $(option).addClass("right");
    $("#vidHide").show();

    score++;
  } else {
    $("#vidShowBack").show();
    $("#vidHideNext").hide();  
    $(option).addClass("wrong");
    wrong++;
  }

    $(".scoreBox span").text(score);


    $(".optionBox span").attr("onclick", "");



    

}





//Function to check answer ends here

//Function for next question to start

function showNext(){

    if(index >= questions.length -1){
        showResult(0);
        return;
    }
    index++;

    $("#vidHide").hide();
    $(".optionBox span").removeClass();
    $(".hint").hide();


    $(".optionBox span").attr("onclick","checkAnswer(this)");
    printQuestion(index);
}

//Function for next question end


//Function for result start

function showResult(j){

    if(
        j == 1 &&
        index < questions.length -1 &&
        !confirm(
            "Quiz has not finished yet. Press ok to skip & get your final results."
        )
    ){
        return;


    }

    result();

}

//Function for result end




//Show result function starts here

function result() {
    $("#questionScreen").hide();
    $("#resultScreen").show();
    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}

//Show result function ends here

