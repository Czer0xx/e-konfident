const name = document.getElementById("Imie");
const surename = document.getElementById("Nazwisko");
const note = document.getElementById("Notatka");
const formall = document.getElementById("formall");
const errorElement = document.getElementById("error");

function sendForm() {
  var surename2 = surename.value;
  var imie2 = name.value;
  var notatka = note.value;
  sessionStorage.setItem("imie", imie2);
  sessionStorage.setItem("nazwisko", surename2);
  sessionStorage.setItem("notatka", notatka);
}
