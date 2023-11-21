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

// function oddNumberCount(num) {
// for (let i = 0; i <= num.length; i++){
//     if (i % 2 !==0)
    
//     }
// }
// oddNumberCount(10)

//////////////////////
//Disemvoweling Trolls
//////////////////////
//Write a function that returns a string with no vowels
// function trollsBeGone() {
//     const Bilbo = "I'll turn you all into stone!"
//     const noVowels = Bilbo.replace(/[aeiou]/gi, '');
//     console.log(noVowels)
// }
// trollsBeGone()


//////////////////////
//Bank Account Summary
//////////////////////
//Make an object named bankInfo
//Include these keys: savings, checking, moneyMarket, creditCard
//Write a function called bankAccountSummary that accepts your bankInfo object as an argument

const bankInfo = {
    savings: 100,
    checking: 200,
    moneyMarket: 500,
    creditCard: 1000,
}
let sum = 0
function bankAccountSummary() {
    for (let balances in bankInfo) {
        sum += bankInfo[balances]
    }
    return sum
}
console.log(bankAccountSummary())

const bankTotal = sum;

function inTheRed(sum) {
    if (sum < 0) {
        result = 'True';
    } else {
        result = 'False';
    }
    return result;
}
console.log(inTheRed(bankTotal))
