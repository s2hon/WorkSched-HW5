//update time function
var updateTime = function () {
    date = moment(new Date());
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

var nowHour = parseInt(moment(new Date()).format('HH'));


$(document).ready(function(){
    //calling stored data
    renderPlans();

    //jumbotron - update time
    datetime = $('#currentDay')
    updateTime();
    setInterval(updateTime, 1000);

    //block color change based on current time
    for (var i=8; i<=18; i++) {
        var rowTime = $('#calendar-row'+i).children('textarea');
        var rowId = parseInt(rowTime.attr('textEntryId'));

        if (nowHour === rowId){
            $(rowTime).addClass("present");
        }

        if (nowHour > rowId){
            $(rowTime).addClass("past");
        }

        if (nowHour < rowId){
            console.log(typeof(nowHour), typeof(rowId))
            $(rowTime).addClass("future");
        }
    };
    //save button hover
    $('.saveBtn').on("mouseenter", function () {
        $(this).addClass('hover');
    });

    $('.saveBtn').on("mouseleave", function () {
        $(this).removeClass('hover');
    });

    //add events
    $('.saveBtn').on('click', function(){
        //save plans
        var btnTxt = $(this).parent().siblings('textarea');
        var plan = btnTxt.val();
        //save hour
        var planHour = $(this).parent().siblings('textarea').attr('textEntryId');

        // save the plan to local storage
        localStorage.setItem(planHour, plan);
    });

    //  retrieve stored user inputs from local storage and populate the hour's input value with them
        function renderPlans() {
            for (var i = 8; i <= 18; i++) 
            $('#calendar-row'+i).children('textarea').val(localStorage.getItem(i));
        }

    //hide/show plans
    $('.hideBtn').on('click', function () {
        $(this).parent().siblings('textarea').toggle();
    });
    
    // //needs to clear everyday
    // if (nowHour >= 7){
    //     window.localStorage.clear();
    //     $("textarea").val("");
    // };
});



