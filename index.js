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
    {
        text: "Blaseball is a mess.",
        weight: 10
    },
    {
        text: "also who are the data witches",
        weight: 10
    },
];

const hats = {
  'chef': {
    src: 'squid-hat.png',
    alt: "A giant squid, adorned with a chef's hat, floating ominously on the page",
    title: "The Monitor from Blaseball.com"
  },
  'fedora': {
    src: 'fedora-squid.svg',
    alt: "A giant squid, adorned with a fedora, floating ominously on the page",
    title: "Giant Squid by Delapouite, Fedora by Lorc; game-icons.net"
  },
  'default': {
    src: 'giant-squid.svg',
    alt: "A giant squid, floating ominously on the page",
    title: "Giant Squid by Delapouite at game-icons.net"
  },
  'ballclark': {
    src: 'ballclark.png',
    alt: 'An angry bbaseball, floating ominously on the page',
    title: "Ball Clark by Quinns at People Make Games"
  }
};

const textArray = text.map(saying => Array(saying.weight).fill(saying.text)).flat();

function onLoad() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || params.get('hat') || 'default';
    if (type === 'coin') {
        document.querySelector(".content").className = "content coin";
    } else {
        document.querySelector(".content").className = "content squid";
        const floaty = document.querySelector(".floaty");
        const hat = hats[type];
        if (!floaty.src.includes(hat.src)) {
            floaty.src = hat.src;
            floaty.alt = hat.alt;
            floaty.title = hat.title;
        }
    }
    const text = params.get('text');
    if (text) {
        document.querySelector(".text").textContent = text;
    } else {
        setText();
    }
}

function setText() {
    // console.log("Set Text");
    document.querySelector(".text").textContent = textArray[
        Math.floor(Math.random() * textArray.length)
    ];
    const rand = (Math.floor(Math.random() * 180) + 30) * 1000;
    // console.log(rand);
    setTimeout(setText, rand);
}
