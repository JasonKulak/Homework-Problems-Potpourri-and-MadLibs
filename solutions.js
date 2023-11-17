//SET ALARM//
//Write a function named setAlarm that has two arguments:
//The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
//The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)


function setAlarm() {

}


//setAlarm(true, true) // => returns false
//setAlarm(false, false) // => returns false
//setAlarm(false, true) // => returns false
//setAlarm(true, false) // => returns true


//Count Odd Numbers//

function oddNumberCount = (number) => {
    for (i = 0; i <= number; i++)
    i % 2 !== 0;
    console.log(i)
}