document.addEventListener("DOMContentLoaded", () => {
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
  
    btn.addEventListener("click", () => {
        const days = birthDay.value;
        const month = birthMonth.value;
        const year = birthYear.value;
  
        if (birthDay.value == "" || birthMonth.value == "" || birthYear.value == "") {
            return alert("Please enter your Date of Birth properly!");
        }
  
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
  
        function getAgePun(ageYears) {
        if (ageYears >= 0 && ageYears <= 2) {
            return "Tiny human, big evolution.";
        } else if (ageYears >= 3 && ageYears <= 12) {
            return "Growing up, evolving out.";
        } else if (ageYears >= 13 && ageYears <= 19) {
            return "Teenage evolution, it's a thing.";
        } else if (ageYears >= 20 && ageYears <= 39) {
            return "The evolution of adulthood.";
        } else if (ageYears >= 40 && ageYears <= 64) {
            return "Mid-life evolution, still evolving.";
        } else {
            return "Evolution at its finest, wisdom included.";
        }
        }
  
  
        resultado.style.display = 'block'
        puns.innerHTML = `${getAgePun(ageYears)}`
        age.innerHTML = `<strong>Congratulations</strong>, you've been on this planet for:<br>
        <strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days!`;
  
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        todayIs.innerHTML = `It's <strong>${dd}/${mm}/${yyyy}</strong>, and the world is <strong>your oyster</strong>. So get out there and <strong>shuck it</strong>!`;
    });
  });
  function fecharPopUp() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("titulo").style.display = "block";
    document.getElementById("container").style.display = "block";
  
  }