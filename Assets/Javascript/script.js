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

  $("#am9 .input").val(localStorage.getItem("am9"));

  $("#am10 .input").val(localStorage.getItem("am10"));

  $("#am11 .input").val(localStorage.getItem("am11"));

  $("#noon .input").val(localStorage.getItem("noon"));

  $("#pm1 .input").val(localStorage.getItem("pm1"));

  $("#pm2 .input").val(localStorage.getItem("pm2"));

  $("#pm3 .input").val(localStorage.getItem("pm3"));

  $("#pm4 .input").val(localStorage.getItem("pm4"));

  $("#pm5 .input").val(localStorage.getItem("pm5"));
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
