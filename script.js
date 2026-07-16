// Copy phone number

const copyButton = document.getElementById("copyPhone");
const message = document.getElementById("copyMessage");

if (copyButton) {
    copyButton.addEventListener("click", () => {

        navigator.clipboard.writeText("+998942662227");

        message.textContent = "✅ Номер скопирован! Свяжитесь с нами в Telegram или по телефону.";

    });
}


// Language buttons (visual only)

const langButtons = document.querySelectorAll(".languages button");

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        langButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});


// Scroll animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
