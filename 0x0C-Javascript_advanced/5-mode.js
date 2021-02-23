function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform= transform;
        document.body.style.background = background;
        document.body.style.color = color;
    };
};

function main () {

let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

document.body.innerHTML = "";
var welcome = document.createElement("p");
welcome.innerHTML = "Welcome Holberton!";
document.body.appendChild(welcome);

var sb = document.createElement("button");
sb.innerHTML= "Spooky";
sb.addEventListener("click", spooky);
document.body.appendChild(sb);

var dm = document.createElement("button");
dm.innerHTML = "Dark Mode";
dm.addEventListener("click", darkMode);
document.body.appendChild(dm);

var scm = document.createElement("button");
scm.innerHTML = "Scream Mode";
scm.addEventListener("click", screamMode);
document.body.appendChild(scm);
};
main();
