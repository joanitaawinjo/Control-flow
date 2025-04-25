//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
function scheduledDelivery(days) {
    days.forEach(day => {
        switch (day) {
            case "Monday":
                console.log(` The delivery for ${day} is foods`)
                break;
            case "Tuesday":
                console.log(`The delivery for ${day} is vegetable`)
                break;
            case "Wednesday":
                console.log(`The delivery for ${day} is Catelery`)
                break;
            case "Thursday":
                console.log(`The delivery for ${day} is Drinks`)
                break;
            case "Friday":
                console.log(`The delivery for ${day} is Clothes`);
                break;
            default:
                console.log("No delivery for this day");
                break

        }

    });
};
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
scheduledDelivery(days);



//Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
function bookStatuses(statuses) {
    statuses.forEach(status => {
        switch (status) {
            case "available":
                console.log("Ready to lend");
                break;
            case "borrowed":
                console.log("Checked out");
                break;
            default:
                console.log("Status unknown");
                break;
        }
    })
}
const statuses = ["available","borrowed","not available"]
bookStatuses(statuses);



//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
function checkCustomerAge(age) {
    for (let i = 0; i < age.length; i++) {
        if (age[i] >= 18) {
            console.log("Adult");
        }
        else {
            console.log("Minor")
        }
    }
}
const age = [20, 12, 16, 19, 30, 3, 10, 25, 35];
checkCustomerAge(age)


//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
function liveCountdown() {
    let live = 5;
    while (live > 0) {
        console.log(`You have ${live} lives left`)
        live--;
    }
    console.log("Game over");
}
liveCountdown()





//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
function userFeedback(feedback) {
    let i = 0;
    do {
        console.log(feedback[i]);
        i++;
    }
    while (i < feedback.length);
}
const comment = ["Good product", "Bad", "Can be improved", "Great", "Interesting"]
userFeedback(comment)



//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
function checkLoginStatus(status) {
    for (let i = 0; i < status.length; i++) {
        if (status[i] == "logged in") {
            console.log("Welcome back");
        }
        else {
            console.log("Please login");
        }
    }
}
const userLoginStatus = ["logged in", "not logged in", "logged in", "not logged in", "logged in", "not logged in"];
checkLoginStatus(userLoginStatus)



//Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
function ticketAddress(priorities) {
    priorities.forEach(priority => {
        switch (priority) {
            case "low":
                console.log("Priority is low");
                break;
            case "medium":
                console.log("Priority is medium")
                break;
            case "high":
                console.log("Priority is high")
                break;
            default:
                console.log("Priority not found");
                break;
        }
    })
}
const priorityList = ["low", "medium", "high", "very low"];
ticketAddress(priorityList);


//Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
function quiz() {
    let count = 10;
    while (count > 0) {
        console.log(`${count}`)
        count--;
    }
    console.log("Time up")
}
quiz()

