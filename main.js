const ism = prompt("Ismingizni kiriting");
const familiya = prompt("Familiyangizni kiriting");
const yosh = +prompt("Yoshingizni kiriting");

const formatOption = prompt(
  "1) Ismingizni katta harflar bilan yozish\n2) Ismingizni kichik harflar bilan yozish\nTanlang: 1 yoki 2"
);

let kataKichik;
if (formatOption === "1") {
  kataKichik = ism.toUpperCase();
} else if (formatOption === "2") {
  kataKichik = ism.toLowerCase();
}

const newName = document.createElement("h1");
const newSurname = document.createElement("h2");
const newAge = document.createElement("h3");

newName.textContent = kataKichik;
newSurname.textContent = familiya;
newAge.textContent = yosh;

document.body.style.width = 400; // Orqa fon rangini o'rnatish
document.body.style.height = 400; // Orqa fon rangini o'rnatish
document.body.style.backgroundColor = "black"; // Orqa fon rangini o'rnatish
newName.style.color = "white"; // Matnni oq rangda qilish
newSurname.style.color = "white";
newAge.style.color = "white";

document.body.append(newName, newSurname, newAge);
