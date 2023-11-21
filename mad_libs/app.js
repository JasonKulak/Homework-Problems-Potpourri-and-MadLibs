//First, create an object called words with the keys given below:
//The keys: number, adjective, plural noun (pluralNoun), adverb, another adjective (anotherAdjective)


let words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}
console.log(words)

const player = {

}

function startMadlib() {
    const number = prompt("Give me a number");
    return words.number;
}
console.log(startMadlib())