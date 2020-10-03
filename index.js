const text = [
    {
        text: "you're my best friend. just you. dont tell anyone",
        weight: 3
    },
    {
        text: "hungry",
        weight: 15
    },
    {
        text: "shovel them in there",
        weight: 8
    },
    {
        text: "hey",
        weight: 15
    },
    {
        text: "what?",
        weight: 15
    },
    {
        text: "the commissioner is doing a great job",
        weight: 4
    },
    {
        text: "sibr is doing a great job",
        weight: 4
    },
    {
        text: "where's jaylen?",
        weight: 15
    },
    {
        text: "it's pronounced sibr",
        weight: 4
    }
]

let textArray = []

function createWeightedArray(){
    for (const item in text) {
        if (text.hasOwnProperty(item)) {
            const data = text[item];
            for (let index = 0; index < data.weight; index++) {
                textArray.push(data.text);
            }
        }
    }
    // console.log(textArray)
}

function setText(){
    // console.log("Set Text");
    let rand = (Math.floor(Math.random() * 180) + 30)*1000;
    // console.log(rand);
    document.querySelector(".text").innerHTML = textArray[Math.floor(Math.random()*textArray.length)];
    setTimeout(setText, rand);
}

createWeightedArray()