$(document).ready(function() {

    //Show current time in header
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Initialize event lister for user input and time stamp
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in the users local storage
        localStorage.setItem(time,text);
    })

    //Load the saved data from local storage. 
    $("#time-9 .description").val(localStorage.getItem("time-9"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-13 .description").val(localStorage.getItem("time-13"));
    $("#time-14 .description").val(localStorage.getItem("time-14"));
    $("#time-15 .description").val(localStorage.getItem("time-15"));
    $("#time-16 .description").val(localStorage.getItem("time-16"));
    $("#time-17 .description").val(localStorage.getItem("time-17"));


    function timeTracker() {
        //return the current number of hours
        var currentHour = moment().hour();

        //loop over the time blocks
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("time-")[1]);
            

            //Verify if moved past this time
            if (blockHour < currentHour ){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }

            else if (blockHour === currentHour){ 
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");  
            }

            else{
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

        })
    }
    timeTracker();
})