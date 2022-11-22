// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveButton = $('.saveBtn')

// Attempting to get current day to display




var dateArea = $('#currentDay');
var currentDate = dayjs().format('MMM D , YYYY')

var timeInterval = setInterval(myTimer, 1000)

function myTimer() {
  const newDay = new Date()
  dateArea.text(currentDate + ' ' + newDay.toLocaleTimeString())
}

// Variables used to 1) grab textarea 2) get a number out of the hour string 3) get the current hour 
var getTextArea = document.querySelectorAll('textarea')
var textDataSetHour = parseInt(getTextArea[0].dataset.hour)
var today = new Date()
var currentHour = parseInt(today.getHours())
// console.log(getTextArea)
// console.log(textDataSetHour)
// console.log(today)
// console.log(currentHour)






// Attempt 2 trying to get color assigning to work
  function colorChange() {

    var getTextArea = document.querySelectorAll('textarea')
    var textDataSetHour = parseInt(getTextArea[0].dataset.hour)
    var today = new Date()
    var currentHour = parseInt(today.getHours())
    console.log(currentHour)
    

    // for (let i = 0; i < getTextArea.length; i++) {
      
      getTextArea.forEach(element => {


        function helpMeImDying () {
        if (textDataSetHour === currentHour) {
               $(this).addClass("present");
               $(this).removeClass("future");
               $(this).removeClass("past");
             } else if (textDataSetHour > currentHour) {
               $(this).addClass("future");
               $(this).removeClass("past");
               $(this).removeClass("present");
             } else {
               $(this).addClass("past");
               $(this).removeClass("future");
               $(this).removeClass("present");
               $(this).prop("disabled", true);
             }
      }})
      
     
    } 
    
  // }
  


//    //conditions to determine what color to display
//    if (calendarHour === currentHour) {
//      $(this).addClass("present");
//      $(this).removeClass("future");
//      $(this).removeClass("past");
//    } else if (calendarHour > currentHour) {
//      $(this).addClass("future");
//      $(this).removeClass("past");
//      $(this).removeClass("present");
//    } else {
//      $(this).addClass("past");
//      $(this).removeClass("future");
//      $(this).removeClass("present");
//      $(this).prop("disabled", true);
//    }
//  });

// Attempt 1: trying to use for loop to assign proper colors
  // function changeHour() {

//  for (let i = 0; i < getTextArea.length; i++) {
    
//     if (currentHour > textDataSetHour) {
//       $('.past').attr('style', 'background-color: grey')
//   }
//     if (currentHour = textDataSetHour) {
//       // color is green
//       $('.present').attr('style', 'background-color: #b8e0d2')
//   }
//     if (currentHour < textDataSetHour) {
//       // color is red
//       $('.future').attr('style', 'background-color: #eac4d5')
//   }
   
//   }}




// Older trial 
//   var hour = dayjs().hour()
//   var hourArea = element.getAttribute("data-hour")
//   console.log(hourArea)
// }
// changeHour()



// Getting all local items
$('#text9am').val(localStorage.text9am)
$('#text10am').val(localStorage.text10am)
$('#text11am').val(localStorage.text11am)
$('#text12pm').val(localStorage.text12pm)
$('#text1pm').val(localStorage.text1pm)
$('#text2pm').val(localStorage.text2pm)
$('#text3pm').val(localStorage.text3pm)
$('#text4pm').val(localStorage.text4pm)
$('#text5pm').val(localStorage.text5pm)

// Saving to local storage with save button
$('#save9am').on('click', function(){
  localStorage.text9am = $('#text9am').val()
})

$('#save10am').on('click', function(){
  localStorage.text10am = $('#text10am').val()
})

$('#save11am').on('click', function(){
  localStorage.text11am = $('#text11am').val()
})

$('#save12pm').on('click', function(){
  localStorage.text12pm = $('#text12pm').val()
})

$('#save1pm').on('click', function(){
  localStorage.text1pm = $('#text1pm').val()
})

$('#save2pm').on('click', function(){
  localStorage.text2pm = $('#text2pm').val()
})

$('#save3pm').on('click', function(){
  localStorage.text3pm = $('#text3pm').val()
})

$('#save4pm').on('click', function(){
  localStorage.text4pm = $('#text4pm').val()
})

$('#save5pm').on('click', function(){
  localStorage.text5pm = $('#text5pm').val()
})

// Click for storing local data
// saveButton.on('click', storeData)





// Attempting to store local saved items
// function storeData() {
//     var 
// }



// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

