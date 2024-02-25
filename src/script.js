const clock = document.getElementById("clock");

clock.innerHTML = new Date().toLocaleTimeString();
setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 1000)

let sozlerp = document.getElementById("sozler");
let sozlerl = [
    "Ölmek, yaşama alışmak demektir.",
    "Ve en nihayetinde yine kendine dönersin…",
    "Sınırların farkına varmak, onları zaten aşmış olmak demektir.",
]

sozlerp.innerHTML = sozlerl[Math.floor(Math.random() * sozlerl.length)];
