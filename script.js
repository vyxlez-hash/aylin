// =========================
// AYLIN EDUCATION
// script.js (Part 1)
// =========================

const t = {

ru:{

logoSubtitle:"Русский язык для детей",
navAbout:"О курсе",
navProgram:"Программа",
navContact:"Контакты",

badge:"Обучение детей с нуля",

heroTitle:"Русский язык для детей",

heroText:"Современные занятия, игры, чтение, разговорная практика и правильное произношение.",

joinButton:"Записаться",
learnButton:"Подробнее",

aboutTitle:"Почему выбирают Aylin Education?",
aboutSubtitle:"Мы обучаем детей русскому языку с нуля.",

programTitle:"Что изучают дети?",
programSubtitle:"Весёлые занятия для детей любого возраста.",

contactTitle:"Контакты",
contactSubtitle:"Свяжитесь с нами удобным способом.",

copyHint:"Нажмите на номер, чтобы скопировать его.",

footerText:"Русский язык для детей."

},

en:{

logoSubtitle:"Russian for Children",
navAbout:"About",
navProgram:"Program",
navContact:"Contact",

badge:"Russian from Zero",

heroTitle:"Russian for Children",

heroText:"Fun lessons, games, reading, speaking and pronunciation for kids.",

joinButton:"Enroll",
learnButton:"Learn More",

aboutTitle:"Why Choose Aylin Education?",
aboutSubtitle:"We teach Russian to children from scratch.",

programTitle:"What Will Children Learn?",
programSubtitle:"Fun lessons for children of all ages.",

contactTitle:"Contact",
contactSubtitle:"Get in touch with us.",

copyHint:"Click the phone number to copy it.",

footerText:"Russian language for children."

},

uz:{

logoSubtitle:"Bolalar uchun rus tili",
navAbout:"Kurs",
navProgram:"Dastur",
navContact:"Aloqa",

badge:"Noldan o'qitish",

heroTitle:"Bolalar uchun rus tili",

heroText:"Qiziqarli darslar, o'yinlar, o'qish va talaffuz.",

joinButton:"Ro'yxatdan o'tish",
learnButton:"Batafsil",

aboutTitle:"Nega Aylin Education?",
aboutSubtitle:"Biz bolalarga rus tilini noldan o'rgatamiz.",

programTitle:"Bolalar nimalarni o'rganadi?",
programSubtitle:"Har yoshdagi bolalar uchun qiziqarli darslar.",

contactTitle:"Aloqa",
contactSubtitle:"Biz bilan bog'laning.",

copyHint:"Telefon raqamini nusxalash uchun bosing.",

footerText:"Bolalar uchun rus tili."

}

};

function setLanguage(lang){

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key=el.dataset.i18n;

if(t[lang] && t[lang][key]){

el.textContent=t[lang][key];

}

});

localStorage.setItem("language",lang);

}
// =========================
// PART 2
// =========================

// Language buttons

const buttons = document.querySelectorAll(".lang");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

setLanguage(button.dataset.lang);

});

});

// Load saved language

const savedLanguage = localStorage.getItem("language") || "ru";

setLanguage(savedLanguage);

buttons.forEach(button=>{

if(button.dataset.lang===savedLanguage){

button.classList.add("active");

}else{

button.classList.remove("active");

}

});

// Copy phone

const phoneButton=document.getElementById("copyPhone");

const copyMessage=document.getElementById("copyMessage");

if(phoneButton){

phoneButton.addEventListener("click",()=>{

navigator.clipboard.writeText("+998942662227");

const currentLanguage=localStorage.getItem("language")||"ru";

const messages={

ru:"✅ Номер скопирован!",

en:"✅ Phone number copied!",

uz:"✅ Telefon raqami nusxalandi!"

};

copyMessage.textContent=messages[currentLanguage];

});

}

// Mobile menu

const menuBtn=document.getElementById("menuBtn");

const nav=document.getElementById("nav");

if(menuBtn && nav){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("open");

});

}
// =========================
// PART 3
// Animations
// =========================

// Fade-in animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

document.querySelectorAll("section,.about-card,.program-card,.mini-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// Smooth navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Active nav on scroll

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Small logo animation

const logo=document.querySelector(".logo");

if(logo){

logo.addEventListener("mouseenter",()=>{

logo.style.transform="scale(1.04)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="scale(1)";

});

}
