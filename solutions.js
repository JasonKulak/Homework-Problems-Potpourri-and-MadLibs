///////////
//SET ALARM
///////////
//Write a function named setAlarm that has two arguments:
//The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
//The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)


// function setAlarm(employed, vacationing){
//     if (employed === true && vacationing === false){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }   
// setAlarm(true, true)

//setAlarm(true, true) // => returns false
//setAlarm(false, false) // => returns false
//setAlarm(false, true) // => returns false
//setAlarm(true, false) // => returns true

///////////////////
//Count Odd Numbers
///////////////////
//COME BACK TO THIS?
function oddNumberCount(number){
for (let i = 0; i <= number; i++) {
    if (i % 2 != 0) {
        console.log(i)
         }
    }
}
oddNumberCount(10)

//////////////////////
//Disemvoweling Trolls
//////////////////////