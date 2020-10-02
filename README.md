# WorkSched-hw5

*Objectives*

For this project my goal was to succesfully build a calendar application that allows the user to save events for each hour of the day.

The requirements were:
* to use the [Moment.js](https://momentjs.com/) library to work with date and time
* create a daily planner with:
    * current day is displayed at the top of the calendar
    * timeblocks for standard business hours (8am-6pm)
    * each timeblock is color coded (past-grey, present-red, or future-green)
    *each row is divided into 3 parts:
        * column 1: time of day
        * column 2: planner (text box)
        * column 3: save button
    * the user can type their events (plans) in column 2
    * and click on the save button in column 3 to save the event is saved in local storage
    * so that when the user refreshes the page the saved events is still there

*Reflection*

The hardest part of this assignment was to not only understand how the flow of the JS worked but to use jQuery.
It was confusing at first trying to go back and forth so I first pseudo coded out all the steps.

Then I switched gears to jQuery and started working first on the date part of the project.

I biggest problem I had while working on this project was trying to make the colors correct esp for 8am and 9am. I figured out later that when comparing numbers in strings it can comeout to be true when false esp when comparing one digits vs two digits. So when I compared 8am with current time (i.e. 8 vs 14) the numbers as strings gave me true for the condition 8>14. So I had to parseInt to get a "true" statement.

I feel much more confident with the logic skills (how to code out functions) compared to last week. I feel that it will get easier everyday but I have a long way to go to master JavaScript.
I will countinue on my JavaScript (and now jQuery!) journey.

Git Hub: https://github.com/s2hon/WorkSched-HW5
Live Website: https://s2hon.github.io/WorkSched-HW5/


![work schedule](screenshot.gif)
