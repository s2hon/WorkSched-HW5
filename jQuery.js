$(document).ready(function(){
    //date on jumbotron to update
    datetime = $('#currentDay')
    updateTime();
    setInterval(update, 1000);

    var updateTime = function () {
        date = moment(new Date())
        datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    };

    //past

    //present

    //future

    //can add events
        //first need to register button
        $('.saveBtn').on('click', function() {
            var entryId = $(this).attr('textEntryId');
            
        });

    //save button



    //clear button

    //needs to clear everyday
    
});


