// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveButton = $('.saveBtn')

// Getting the values from save button

$(saveButton).click


// Attempting to get current day to display
var dateArea = $('#currentDay');
var currentDate = dayjs()
dateArea.text(currentDate)

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

// Adding functionality for all save buttons


// Click for storing local data
saveButton.on('click', storeData)





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
