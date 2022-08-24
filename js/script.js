const overskrift = document.querySelector("h1")
overskrift.textContent;
console.log(overskrift.textContent);
overskrift.textContent = "Billeder";
console.log(overskrift.textContent);

const artikel1p = document.querySelector("article:nth-child(1) p");
artikel1p.textContent = "Her er et billede."

const artikel1overskrift = document.querySelector("article:nth-child(1) h2");
artikel1overskrift.textContent = "Vandfald"

const artikel2p = document.querySelector("article:nth-child(2) p");
artikel2p.textContent = "Her er et billede."

const artikel2overskrift = document.querySelector("article:nth-child(2) h2");
artikel2overskrift.textContent = "Ørken"

const pic1 = document.querySelector("article:nth-child(1) img");
console.log(pic1);
pic1.src = "img/placeimg_640_480_nature_3.jpg";
pic1.alt = "Nyt vandfald";

const pic2 = document.querySelector("article:nth-child(2) img");
console.log(pic2);
pic2.src = "img/placeimg_640_480_nature_4.jpg";
pic2.alt = "Ny ørken med blå sten";