var saveButton = $('.saveBtn')
var dateArea = $('#currentDay');
var currentDate = dayjs().format('MMM D , YYYY')

// Display correct time
var timeInterval = setInterval(myTimer, 1000)

function myTimer() {
  const newDay = new Date()
  dateArea.text(currentDate + ' ' + newDay.toLocaleTimeString())
}
 
var getTextArea = document.querySelectorAll('textarea')


// Color change for each hour function
function colorChange() {

getTextArea.forEach (element => {
var textAreaTime = element.getAttribute('data-hour')
var currentHour = dayjs().hour()
console.log(currentHour)
if (textAreaTime < currentHour) {
  element.classList.add('past');
  element.classList.remove('present');
  element.classList.remove('future');
} else if(textAreaTime == currentHour) {
  element.classList.add('present');
  element.classList.remove('past');
  element.classList.remove('future');
} else {
  element.classList.add('future')
  element.classList.remove('past')
  element.classList.remove('present')
}
})
}

colorChange()


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


// Saving and keeping imput from localstorage
saveButton.on('click',saveItUp)

function saveItUp() {
  var value = $(this).siblings('.description').val()
  var timeNumber2 = $(this).parent().attr('id')
  localStorage.setItem(timeNumber2, value)

  

}

$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-1 .description').val(localStorage.getItem('hour-1'))
$('#hour-2 .description').val(localStorage.getItem('hour-2'))
$('#hour-3 .description').val(localStorage.getItem('hour-3'))
$('#hour-4 .description').val(localStorage.getItem('hour-4'))
$('#hour-5 .description').val(localStorage.getItem('hour-5'))






// Other method for saving local storage
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

