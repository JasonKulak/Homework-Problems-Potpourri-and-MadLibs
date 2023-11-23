//First, create an object called words with the keys given below:
//The keys: number, adjective, plural noun (pluralNoun), adverb, another adjective (anotherAdjective)


const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}
console.log(words)

function startMadlib() {
    words.number = prompt("Give me a number");
    words.adjective = prompt("Give me an adjective");
    words.pluralNoun = prompt("Give me a plural noun");
    words.adverb = prompt("Give me an adverb");
    words.anotherAdjective = prompt("give me another adjective");

    alert(`Once upon a time a group of ${words.number} General Assembly graduates
got together and made a startup called ${words.adjective} Technologies.
Their goal was to create smart ${words.pluralNoun}.
They approached the challenge ${words.adverb}
which ultimately lead them to ${words.anotherAdjective} fame.
`);
}
startMadlib();

