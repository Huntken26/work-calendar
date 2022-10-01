//Displaying the current time using the moment.js api
var timeNow = moment();
$("#currentDay").text(timeNow.format("LLLL"));


// storage() sets an onclick event for each save button, also sets/gets local storage for the time block inputs.
function storage() {
  $(".saveBtn").on("click", function () {
    let inputs = $(this).siblings(".input").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, inputs);
  });
//10/1 Just checked my site and the colors weren't updating. Currently researching and debugging 12:29pm
//I found the solution! Apparently I made up thoe id's for the time blocks but i needed specific ids to convert the hours
  $("#hour9 .input").val(localStorage.getItem("hour9"));

  $("#hour10 .input").val(localStorage.getItem("hour10"));

  $("#hour11 .input").val(localStorage.getItem("hour11"));

  $("#hour12 .input").val(localStorage.getItem("hour12"));

  $("#hour13 .input").val(localStorage.getItem("hour13"));

  $("#hour14 .input").val(localStorage.getItem("hour14"));

  $("#hour15 .input").val(localStorage.getItem("hour15"));

  $("#hour16 .input").val(localStorage.getItem("hour16"));

  $("#hour17 .input").val(localStorage.getItem("hour17"));
}


//function uses jQuery's each to loop the time blocks; also sets the conditions for the rows to be color coded.
function calendar() {
  $(".row").each(function () {
    let otherColors = parseFloat($(this).attr("id").split("hour")[1]);
    let red = moment().hour();

    if (otherColors < red) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (otherColors === red) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

storage();
calendar();
