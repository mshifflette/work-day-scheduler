// define our variables and set data of each text area 
var nineAmTextArea = $('#9amTextArea');
$(nineAmTextArea).attr("data-main", 9);
var tenAmTextArea = $('#10amTextArea');
$(tenAmTextArea).attr("data-main", 10);
var elevenAmTextArea = $('#11amTextArea');
$(elevenAmTextArea).attr("data-main", 11);
var twelvePmTextArea = $('#12pmTextArea');
$(twelvePmTextArea).attr("data-main", 12);
var onePmTextArea = $('#1pmTextArea');
$(onePmTextArea).attr("data-main", 13);
var twoPmTextArea = $('#2pmTextArea');
$(twoPmTextArea).attr("data-main", 14);
var threePmTextArea = $('#3pmTextArea');
$(threePmTextArea).attr("data-main", 15);
var fourPmTextArea = $('#4pmTextArea');
$(fourPmTextArea).attr("data-main", 16);
var fivePmTextArea = $('#5pmTextArea');
$(fivePmTextArea).attr("data-main", 17);

var listOfTextAreas = [nineAmTextArea,tenAmTextArea,elevenAmTextArea,twelvePmTextArea,onePmTextArea,twoPmTextArea,threePmTextArea,fourPmTextArea,fivePmTextArea]
    

// sets the day at the top to current day 

var currentDay = moment().format("dddd, MMMM Do");
console.log(currentDay)
$('#currentDay').text(currentDay)


 var currentHour = moment().format("H")


// for (let i = 0; i < listOfTextAreas.length; i++) {
//     if(currentHour > listOfTextAreas[i].attr("data-main")){
//         listOfTextAreas[i].addClass("future");
//     }else if (currentHour == listOfTextAreas[i].attr("data-main") ){
//         listOfTextAreas[i].addClass("present");
//     } else {
//         listOfTextAreas[i].addClass("past");
//     }
    
// }

    for (let i = 0; i < listOfTextAreas.length; i++) {
        if(currentHour == listOfTextAreas[i].attr("data-main")){
            listOfTextAreas[i].addClass("present");
            listOfTextAreas[i].removeClass("future");
            listOfTextAreas[i].removeClass("past");
        } 
        if(currentHour > listOfTextAreas[i].attr("data-main")){
            listOfTextAreas[i].addClass("past");
            listOfTextAreas[i].removeClass("future");
            listOfTextAreas[i].removeClass("present");
        }      
        if(currentHour < listOfTextAreas[i].attr("data-main")){
            listOfTextAreas[i].addClass("future");
            listOfTextAreas[i].removeClass("past");
            listOfTextAreas[i].removeClass("present");
        }      
    }


// figure out how to make these a loop T.T
var saveButton1 = document.getElementById("saveBtn1")
saveButton1.addEventListener('click', function() {
    var Content = nineAmTextArea.val();
    localStorage.setItem('savedTextContent1', Content);
});

function checkStoredData1(){
    var storedData = localStorage.getItem('savedTextContent1');
    nineAmTextArea.text(storedData);
}
checkStoredData1();

// figure out how to make these a loop T.T

var saveButton2 = document.getElementById("saveBtn2")
saveButton2.addEventListener('click', function() {
    var Content = tenAmTextArea.val();
    localStorage.setItem('savedTextContent2', Content);
});

function checkStoredData2(){
    var storedData = localStorage.getItem('savedTextContent2');
    tenAmTextArea.text(storedData);
}
checkStoredData2();

// figure out how to make these a loop T.T

var saveButton3 = document.getElementById("saveBtn3")
saveButton3.addEventListener('click', function() {
    var Content = elevenAmTextArea.val();
    localStorage.setItem('savedTextContent3', Content);
});

function checkStoredData3(){
    var storedData = localStorage.getItem('savedTextContent3');
    elevenAmTextArea.text(storedData);
}
checkStoredData3();

// figure out how to make these a loop T.T

var saveButton4 = document.getElementById("saveBtn4")
saveButton4.addEventListener('click', function() {
    var Content = twelvePmTextArea.val();
    localStorage.setItem('savedTextContent4', Content);
});

function checkStoredData4(){
    var storedData = localStorage.getItem('savedTextContent4');
    twelvePmTextArea.text(storedData);
}
checkStoredData4();

// figure out how to make these a loop T.T

var saveButton5 = document.getElementById("saveBtn5")
saveButton5.addEventListener('click', function() {
    var Content = onePmTextArea.val();
    localStorage.setItem('savedTextContent5', Content);
});

function checkStoredData5(){
    var storedData = localStorage.getItem('savedTextContent5');
    onePmTextArea.text(storedData);
}
checkStoredData5();

// figure out how to make these a loop T.T

var saveButton6 = document.getElementById("saveBtn6")
saveButton6.addEventListener('click', function() {
    var Content = twoPmTextArea.val();
    localStorage.setItem('savedTextContent6', Content);
});

function checkStoredData6(){
    var storedData = localStorage.getItem('savedTextContent6');
    twoPmTextArea.text(storedData);
}
checkStoredData6();

// figure out how to make these a loop T.T

var saveButton7 = document.getElementById("saveBtn7")
saveButton7.addEventListener('click', function() {
    var Content = threePmTextArea.val();
    localStorage.setItem('savedTextContent7', Content);
});

function checkStoredData7(){
    var storedData = localStorage.getItem('savedTextContent7');
    threePmTextArea.text(storedData);
}
checkStoredData7();

// figure out how to make these a loop T.T

var saveButton8 = document.getElementById("saveBtn8")
saveButton8.addEventListener('click', function() {
    var Content = fourPmTextArea.val();
    localStorage.setItem('savedTextContent8', Content);
});

function checkStoredData8(){
    var storedData = localStorage.getItem('savedTextContent8');
    fourPmTextArea.text(storedData);
}
checkStoredData8();

// figure out how to make these a loop T.T

var saveButton9 = document.getElementById("saveBtn9")
saveButton9.addEventListener('click', function() {
    var Content = fivePmTextArea.val();
    localStorage.setItem('savedTextContent9', Content);
});

function checkStoredData9(){
    var storedData = localStorage.getItem('savedTextContent9');
    fivePmTextArea.text(storedData);
}
checkStoredData9();