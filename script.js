let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let ce = document.getElementById("CE");
let plusm = document.getElementById("plusmi");
let per = document.getElementById("%");
let divi = document.getElementById("/");
let mul = document.getElementById("*");
let min = document.getElementById("-");
let plus = document.getElementById("+");
let eq = document.getElementById("=");
let dot = document.getElementById("dot");
let val = document.getElementById("display"); // display lower
let val2 = document.getElementById("display2");   // display upper
let inputt = 0;   // answer  // display upper
let inputt2 = 0; // after plus
let inputt3 = 0; // display lower;
var prev = '';
let flag = false;

function opt(n, c){
    inputt3 = inputt3*10 + n;
    if(!flag)
        inputt = inputt*10 + n;
    else{
        inputt2 = inputt2*10 + n;
        val2.innerHTML = inputt + c;
    }
    val.innerHTML = inputt3;
}

function checkprev(c){
    if(c == '+')
        inputt += inputt2;
    else if(c == '-')
        inputt -= inputt2;
    else if(c == '*')
        inputt *= inputt2;
    else if(c == '/')
        inputt /= inputt2;
}

function operations(c){
    flag = true;
    checkprev(prev);
    prev = c;
    inputt2 = 0;
    inputt3 = 0;
    val.innerHTML = 0;
    val2.innerHTML =  inputt + prev; 
}


one.addEventListener('click', () => {
    opt(1, prev);
})
two.addEventListener('click', () => {
    opt(2, prev);
})
three.addEventListener('click', () => {
    opt(3, prev);
})
four.addEventListener('click', () => {
    opt(4, prev);
})
five.addEventListener('click', () => {
    opt(5, prev);
})
six.addEventListener('click', () => {
    opt(6, prev);
})
seven.addEventListener('click', () => {
    opt(7, prev);
})
eight.addEventListener('click', () => {
    opt(8, prev);
})
nine.addEventListener('click', () => {
    opt(9, prev);
})
zero.addEventListener('click', () => {
    opt(0, prev);
})


plus.addEventListener('click', () => {
    operations('+');
})

min.addEventListener('click', () => {
    operations('-');
})

mul.addEventListener('click', () => {
    operations('*');
})

divi.addEventListener('click', () => {
    operations('/');
})

plusm.addEventListener('click', () => {
    if(inputt2 == 0)
        inputt = -inputt;
    else
        inputt2 = -inputt2;
    
    inputt3 = -inputt3;
    val.innerHTML = inputt3;
    
})

eq.addEventListener('click', () => {
    checkprev(prev);
    val.innerHTML = inputt;
    inputt2 = 0;
    inputt3 = 0;
    val2.innerHTML = '';
    inputt = 0;
    flag = false;
})

ce.addEventListener('click', () => {
    inputt = 0, inputt2 = 0, inputt3 = 0;
    val.innerHTML = "0";
    val2.innerHTML = "";
    flag = false;
    
})

per.addEventListener('click', () => {
    if(!flag)
        inputt = inputt/100;

    else
        inputt2 = inputt2/100;
    inputt3 = inputt3/100
    flag  = false;
    val.innerHTML = inputt3;
})

// dot.addEventListener('click', () => {
//     if(!flag)
//         inputt = inputt + '.';
//     else{
//         inputt2 = inputt2 + '.';
//     } 
//     inputt3 = inputt3 + '.';
//     val.innerHTML = inputt3;
// })



let left = document.getElementById("left");
let right = document.getElementById("right");
let switch2 = document.getElementById("switch2");
// let switch1 = document.getElementById("switch");
let body = document.getElementById("body");
let container = document.getElementById("container");
let blue = document.querySelectorAll(".bluecol");
let col = document.querySelectorAll(".col");
let a = document.getElementsByTagName("td");
right.addEventListener('click', () => {
    right.style.backgroundColor = "yellow";
    switch2.style.transition = "0.5s";
    left.style.backgroundColor = "transparent";
    switch2.style.backgroundColor = "black";
    body.style.backgroundColor = "rgb(43, 43, 43)";
    // body.style.backgroundColor = "";
    container.style.backgroundColor = "black";
    val.style.color = "white";
    val2.style.color = "white";
    left.style.color = "white";
    right.style.color = "black";
    // body.style.backgroundImage = "url(desktop-wallpaper-michael-gillett-wimvp-new-on-hub-is-a-bliss-version-of-the-surface-pro-x-in-day-and-night-versions-created-by.jpg)"
    // body.style.backgroundRepeat = "no-repeat";
    // body.style.back
    // container.style.color = "white";
    // col.style.backgroundColor = "red";
    // a.style.backgroundColor = "red";
})

left.addEventListener('click', () => {
    right.style.transition = "0.5s";
    switch2.style.backgroundColor = "white";
    left.style.backgroundColor = "yellow";
    right.style.backgroundColor = "transparent";
    right.style.color = "black";
    left.style.color = "black";
    container.style.backgroundColor = "white";
    body.style.backgroundColor = "rgb(190, 255, 255)";
    
    // left.style.color = "initial";
    // right.style.color = "initial";
    // left.style.backgroundColor = "initial";
    // right.style.backgroundColor = "initial";
    // switch2.style.backgroundColor = "initial";
    // body.style.backgroundColor = "initial";
    // container.style.backgroundColor = "initial";
    val.style.color = "initial";
    val2.style.color = "initial";

})
