//get all HTML Jquery Class
//set if  time statement to set a  past, present future class style
$(document).ready(function () {

    //display the current time
    var currentTimeFull = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentTimeFull);

    //add past future presetn class in loop
    var timeSlotArray = $(".time-slot");
    timeSlotArray.each(function (timeSlotIndex) {
        //get current time
        var currentTime = moment().hours();
        //get block time
        var timeSlotTime = parseInt($(timeSlotArray[timeSlotIndex]).attr("data"));

        //check tense
        if (currentTime < timeSlotTime) {
            $(timeSlotArray[timeSlotIndex]).addClass("past");
        } else if (currentTime === timeSlotTime) {
            $(timeSlotArray[timeSlotIndex]).addClass("present");
        } else {
            $(timeSlotArray[timeSlotIndex]).addClass("future");
        }
    });


    //get local stored data and populate the textarea
    var timeSlotArray = $(".time-slot");
    for (let i = 9; i < timeSlotArray.length + 9; i++) {
        //check if null
        var storedData = localStorage.getItem(`data${i}`);
        console.log("*******", storedData);
        if (storedData) {
            //add the text to the right spot
            $(`[data=${i}]`).find("textarea").val( storedData);
        }
    }

    //add event listender to save button
    $(".save-button").on("click",saveNotes);

    //save data
    function saveNotes(event) {
        //get the data
        var timeText = $(event.target).siblings("textarea").val();
        //get the id too
        var id = $(event.target).closest(".time-slot").attr("data");
        //store data
        localStorage.setItem(`data${id}`,timeText);
    }
});