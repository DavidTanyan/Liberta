//Class
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  get name() {
    return this._name;
  }
  get score() {
    return this._score;
  }
  set name(newName) {
    if (newName.length < 3) {
      console.log("Name is too short.");
      return;
    }
    this._name = newName;
  }
  set score(newScore) {
    if (newScore < 1) {
      console.log("Name is too short.");
      return;
    }
    this._score = newScore;
  }
}
let Michael = 83 + 104 + 29 + 21 + 46 + 43 + 83 + 0;
let Vania = 99 + 110 + 31 + 41 + 49 + 48 + 114 + 20;
let Vika = 115 + 116 + 45 + 33 + 48 + 96 + 131 + 25;
let Katsia = 129 + 132 + 50 + 36 + 53 + 77 + 120 + 30;
let David = 101 + 106 + 54 + 16 + 38 + 29 + 39 + 10;
let Milana = 100 + 110 + 45 + 49 + 69 + 64 + 125 + 10;
let Katia = 98 + 110 + 56 + 39 + 68 + 66 + 125 + 10;
let Vlad = 120 + 128 + 61 + 39 + 48 + 68 + 140 + 30;
let PolinaD = 135 + 118 + 57 + 36 + 48 + 88 + 114 + 15;
let Matvei = 92 + 106 + 59 + 34 + 47 + 48 + 54 + 65;
let Mikhail = 99 + 110 + 43 + 35 + 48 + 78 + 75 + 15;
let Polina = 89 + 96 + 40 + 33 + 55 + 44 + 77 + 10;
let Temur = 122 + 134 + 37 + 30 + 47 + 76 + 120 + 50;
let Liza = 101 + 108 + 49 + 31 + 44 + 47 + 133 + 55;

let deti = [
  { score: Michael, name: "Michael Nemenuchi" },
  { score: Vania, name: "Vania Bunin" },
  { score: Vika, name: "Vika Shumei" },
  { score: Katsia, name: "Katsia Korin 📢" },
  { score: David, name: "David Hramovski" },
  { score: Milana, name: "Milana Hramovska " },
  { score: Katia, name: "Katerina Lubashenko " },
  { score: Vlad, name: "Vlad Korin 📢" },
  { score: PolinaD, name: "Polina Denisenko " },
  { score: Matvei, name: "Matvei Vinokuri " },
  { score: Mikhail, name: "Mikhail Borishchuk " },
  { score: Polina, name: "Polina Borishchuk " },
  { score: Temur, name: "Temur Muravchenko 📢" },
  { score: Liza, name: "Liza Samarganishvili" },
];

deti.sort(function (a, b) {
  return a.score - b.score;
});
deti.reverse();

const topPlayers = [];

for (let i = 0; i < deti.length; i++) {
  topPlayers.push(new Player(deti[i].name, deti[i].score));
}

let MostActiveName = document.querySelectorAll(".MostActiveName");
let MostActiveScore = document.querySelectorAll(".MostActiveScore");
//for intialization
for (let x = 0; x < topPlayers.length; x++) {
  MostActiveName[x].textContent = topPlayers[x].name;
  MostActiveScore[x].textContent = topPlayers[x].score;
  // if (topPlayers[x].name =="Katsia Korin 📢" ) {
  //   MostActiveName[x].setAttribute("#lider1");
  // }
}
for (let x = 0; x < topPlayers.length; x++) {
  if (topPlayers[x].name == "Katsia Korin 📢")
    MostActiveName[x].setAttribute("id", "lider1");
  if (topPlayers[x].name == "Vlad Korin 📢")
    MostActiveName[x].setAttribute("id", "lider2");
  if (topPlayers[x].name == "Temur Muravchenko 📢")
    MostActiveName[x].setAttribute("id", "lider3");
}

document.getElementById("lider1").onclick = function (event) {
  window.location.href = "lider_1.html";
};
document.getElementById("lider2").onclick = function (event) {
  window.location.href = "lider_2.html";
};
document.getElementById("lider3").onclick = function (event) {
  window.location.href = "lider_3.html";
};
