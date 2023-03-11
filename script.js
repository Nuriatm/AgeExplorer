const birthDay = document.getElementById('day');
const birthMonth = document.getElementById('month');
const birthYear = document.getElementById('year');
const age = document.getElementById('age');
const btn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const todayIs = document.getElementById('todayis');

let today = new Date();
let d = today.getDate();
let m = today.getMonth() + 1;
let y = today.getFullYear();


function verificaDados(){
    if (birthDay.value == "" || birthMonth.value == "" || birthYear.value == ""){
        alert("Please enter your Date of Birth properly!");
        return
    }
    let inputDate = new Date(`${birthMonth.value}/${birthDay.value}/${birthYear.value}`);
    if (inputDate > today) {
        alert("Please enter a valid Date of Birth");
        return;
    }
    

    const days = birthDay.value;
    const month = birthMonth.value;
    const year = birthYear.value;

    defineMaxdays(days, month, year)
}


function defineMaxdays(days, month, year){
    let maxDays = new Date(year, month, 0).getDate();
    let ageYears = y - year;
    let ageMonths = m - month;
    let ageDays = d - days;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += maxDays;
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
   
        exibeResultado(ageYears, ageMonths, ageDays)
}


function getAgePun(ageYears) {
    if (ageYears >= 0 && ageYears <= 2) return "Tiny human, big evolution.";
    if (ageYears >= 3 && ageYears <= 12) return "Growing up, evolving out.";
    if (ageYears >= 13 && ageYears <= 19) return "Teenage evolution, it's a thing.";
    if (ageYears >= 20 && ageYears <= 39) return "The evolution of adulthood.";
    if (ageYears >= 40 && ageYears <= 64) return "Mid-life evolution, still evolving.";
    if (ageYears > 64) return "Evolution at its finest, wisdom included.";
}

function exibeResultado(ageYears, ageMonths, ageDays){
    resultado.style.display = 'block'
    puns.innerHTML = `${getAgePun(ageYears)}`
    age.innerHTML = `<strong>Congratulations</strong>, you've been on this planet for:<br>
    <strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days!`;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    todayIs.innerHTML = `It's <strong>${dd}/${mm}/${yyyy}</strong>, and the world is <strong>your oyster</strong>. So get out there and <strong>shuck it</strong>!`;
}

function fecharPopUp() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("titulo").style.display = "block";
    document.getElementById("container").style.display = "block";

}

btn.addEventListener("click", verificaDados)


