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

        console.log("currentTime", currentTime);
        console.log("timeSlotTime", timeSlotTime);

        //check tense
        if (currentTime < timeSlotTime) {
            $(timeSlotArray[timeSlotIndex]).addClass("past");
        } else if (currentTime === timeSlotTime) {
            $(timeSlotArray[timeSlotIndex]).addClass("present");
        } else {
            $(timeSlotArray[timeSlotIndex]).addClass("future");
        }
    });

    //pull this data from local
    var dataTimeNotes = [
        {
            timeSlot: 9,
            text: $("[data='9'] textarea").val(),
        },
        {
            timeSlot: 10,
            text: $("[data='9'] textarea").val(),
        },
        {
            timeSlot: 11,
            text: $("[data='9'] textarea").val(),
        },
        {
            timeSlot: 12,
            text: $("[data='9'] textarea").val(),
        }, 
        {
            timeSlot: 13,
            text: $("[data='9'] textarea").val(),
        }, 
        {
            timeSlot: 14,
            text: $("[data='9'] textarea").val(),
        }, 
        {
            timeSlot: 15,
            text: $("[data='9'] textarea").val(),
        }, 
        {
            timeSlot: 16,
            text: $("[data='9'] textarea").val(),
        }, 
        {
            timeSlot: 17,
            text: $("[data='9'] textarea").val(),
        }
    ];
    //display the notes

    function saveNotes() {
        //get current data
        dataTimeNotes = [
            {
                timeSlot: 9,
                text: $("[data='9'] textarea").val(),
            },
            {
                timeSlot: 10,
                text: $("[data='9'] textarea").val(),
            },
            {
                timeSlot: 11,
                text: $("[data='9'] textarea").val(),
            },
            {
                timeSlot: 12,
                text: $("[data='9'] textarea").val(),
            }, 
            {
                timeSlot: 13,
                text: $("[data='9'] textarea").val(),
            }, 
            {
                timeSlot: 14,
                text: $("[data='9'] textarea").val(),
            }, 
            {
                timeSlot: 15,
                text: $("[data='9'] textarea").val(),
            }, 
            {
                timeSlot: 16,
                text: $("[data='9'] textarea").val(),
            }, 
            {
                timeSlot: 17,
                text: $("[data='9'] textarea").val(),
            }
        ];
        // store this data in local
    }

    //give save ntoes eventlistener

    //set save button function
    // function saveBtn() {
    //     //gets userinput from text area
    //     // stores the userinput into key into storage location
    //     //
    // }
});