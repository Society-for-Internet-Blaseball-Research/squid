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
    },
    {
        text: "these eggs are yum",
        weight: 15
    },
    {
        text: "you look like a snack",
        weight: 12
    },
    {
        text: "*cronch*",
        weight: 15
    },
    {
        text: "are you holding out on me",
        weight: 10
    },
    {
        text: "pretzels got wet",
        weight: 10
    },
];

const textArray = text.map(saying => Array(saying.weight).fill(saying.text)).flat();

function onLoad() {
    const hatType = (new URLSearchParams(window.location.search)).get('hat');
    if (hatType === 'chef') {
        const floaty = document.querySelector(".floaty");
        if (!floaty.src.includes('squid-hat.png')) {
            floaty.src = 'squid-hat.png';
            floaty.alt = "A giant squid, adorned with a chef's hat, floating ominously on the page";
            return;
        }
    }
    setText();
}

function setText() {
    // console.log("Set Text");
    document.querySelector(".text").innerHTML = textArray[
        Math.floor(Math.random() * textArray.length)
    ];
    const rand = (Math.floor(Math.random() * 180) + 30) * 1000;
    // console.log(rand);
    setTimeout(setText, rand);
}
