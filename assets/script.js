// save to local storage function
$(document).ready(function () {
  // click listener for save icon
  $(".saveBtn").on("click", function () {  
    // get text from entry into jquery
    var entry = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    // save entry
      localStorage.setItem(hour, entry);
  })
  // local storeage for each hour
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));
  $("#hour19 .description").val(localStorage.getItem("hour19"));
  $("#hour20 .description").val(localStorage.getItem("hour20"));
  $("#hour21 .description").val(localStorage.getItem("hour21"));
  timeTracker();

  function timeTracker() {
    // get current date and time from dayjs in specific format
    var currentDateAndTime = dayjs().format('dddd, MMMM D, YYYY h:mm A')
    // display in dom
      $("#currentDay").html(currentDateAndTime);
    // get current time for timeblock logic
    var currentTime = dayjs().hour();
    // timeblock loop
      $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    // adds class for present time
    if (timeBlock < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
     }
    else if (timeBlock === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
     }
    else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
     }
      })
  } 
})

