const text = [
    "Breathe In<br>1",
    "Breathe In<br>2",
    "Breathe In<br>3",
    "Breathe In<br>4",
    "Hold<br>1",
    "Hold<br>2",
    "Hold<br>3",
    "Hold<br>4",
    "Breathe Out<br>1",
    "Breathe Out<br>2",
    "Breathe Out<br>3",
    "Breathe Out<br>4",
    "Hold<br>1",
    "Hold<br>2",
    "Hold<br>3",
    "Hold<br>4"
]

let place = -1
function setText(){

    document.querySelector(".text").innerHTML = text[place++%16];
    setTimeout(setText, 1000);
}

setText()