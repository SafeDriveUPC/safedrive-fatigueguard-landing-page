const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        button.classList.add("active");

        const selectedTab = button.getAttribute("data-tab");
        document.getElementById(selectedTab).classList.add("active");
    });
});

const sleepRange = document.getElementById("sleepRange");
const sleepValue = document.getElementById("sleepValue");
const riskResult = document.getElementById("riskResult");

sleepRange.addEventListener("input", () => {
    const hours = Number(sleepRange.value);
    sleepValue.textContent = hours;

    riskResult.classList.remove("risk-low", "risk-medium", "risk-high");

    if (hours >= 7) {
        riskResult.classList.add("risk-low");
        riskResult.innerHTML = `
            <span>Riesgo bajo</span>
            <strong>Conducción segura</strong>
        `;
    } else if (hours >= 5) {
        riskResult.classList.add("risk-medium");
        riskResult.innerHTML = `
            <span>Riesgo medio</span>
            <strong>Se recomienda conducir con precaución</strong>
        `;
    } else {
        riskResult.classList.add("risk-high");
        riskResult.innerHTML = `
            <span>Riesgo alto</span>
            <strong>Se recomienda descansar antes de conducir</strong>
        `;
    }
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent = "Gracias. Tu información fue registrada correctamente.";
    contactForm.reset();
});