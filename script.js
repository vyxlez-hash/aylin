// ==========================
// AYLIN EDUCATION
// ==========================

// Languages

const translations={

ru:{

logo:"Русский язык для детей",

nav1:"О центре",
nav2:"Курс",
nav3:"Контакты",

badge:"Русский язык с нуля",

title:"Русский язык для детей",

hero:"Мы обучаем детей русскому языку с помощью современных методик, игр, чтения, разговорной практики и весёлых занятий.",

join:"Записаться",
learn:"Подробнее",

f1:"Обучение с нуля",
f2:"Правильное произношение",
f3:"Чтение",
f4:"Разговорная практика",

cardTitle:"Изучение русского языка",

cardText:"Уроки проходят в дружелюбной атмосфере с играми, карточками и современными заданиями.",

aboutTitle:"Почему выбирают Aylin Education?",

a1:"Индивидуальный подход",
a1d:"Каждый ребёнок получает внимание и поддержку.",

a2:"Обучение через игру",
a2d:"Игры помогают быстрее изучать русский язык.",

a3:"Разговорная практика",
a3d:"Дети начинают уверенно говорить по-русски.",

a4:"Чтение и письмо",
a4d:"Изучение букв, слов и предложений.",

courseTitle:"Что изучают дети?",

courseText:"Полный курс русского языка для начинающих.",

c1:"Правильное произношение",
c2:"Чтение",
c3:"Новые слова",
c4:"Разговорная речь",
c5:"Письмо",
c6:"Игры и творчество",

contactTitle:"Запишитесь на курс",

contactText:"Свяжитесь с нами через Telegram или телефон.",

copyText:"Нажмите на номер, чтобы скопировать.",

footer:"Русский язык для детей с нуля."

},

en:{

logo:"Russian for Children",

nav1:"About",
nav2:"Course",
nav3:"Contact",

badge:"Russian from Scratch",

title:"Russian for Children",

hero:"We teach children Russian through games, speaking, reading and modern learning methods.",

join:"Enroll",
learn:"Learn More",

f1:"From Scratch",
f2:"Pronunciation",
f3:"Reading",
f4:"Speaking",

cardTitle:"Learning Russian",

cardText:"Friendly lessons with games and fun activities.",

aboutTitle:"Why Choose Aylin Education?",

a1:"Personal Approach",
a1d:"Every child gets individual attention.",

a2:"Learning Through Play",
a2d:"Games help children learn faster.",

a3:"Speaking Practice",
a3d:"Children start speaking confidently.",

a4:"Reading & Writing",
a4d:"Letters, words and sentences.",

courseTitle:"What Will Children Learn?",

courseText:"A complete Russian course for beginners.",

c1:"Pronunciation",
c2:"Reading",
c3:"Vocabulary",
c4:"Speaking",
c5:"Writing",
c6:"Games & Creativity",

contactTitle:"Enroll Today",

contactText:"Contact us via Telegram or phone.",

copyText:"Click the number to copy.",

footer:"Russian language for children."

},

uz:{

logo:"Bolalar uchun rus tili",

nav1:"Markaz",
nav2:"Kurs",
nav3:"Aloqa",

badge:"Noldan rus tili",

title:"Bolalar uchun rus tili",

hero:"Bolalar uchun qiziqarli o'yinlar, o'qish, talaffuz va suhbat darslari.",

join:"Ro'yxatdan o'tish",
learn:"Batafsil",

f1:"Noldan",
f2:"Talaffuz",
f3:"O'qish",
f4:"Suhbat",

cardTitle:"Rus tilini o'rganish",

cardText:"Qiziqarli va zamonaviy darslar.",

aboutTitle:"Nega Aylin Education?",

a1:"Individual yondashuv",
a1d:"Har bir bolaga alohida e'tibor.",

a2:"O'yin orqali o'rganish",
a2d:"O'yinlar orqali tezroq o'rganish.",

a3:"Suhbat",
a3d:"Erkin gapirishni o'rganish.",

a4:"O'qish va yozish",
a4d:"Harflar va so'zlar.",

courseTitle:"Bolalar nimani o'rganadi?",

courseText:"Boshlovchilar uchun to'liq kurs.",

c1:"Talaffuz",
c2:"O'qish",
c3:"Yangi so'zlar",
c4:"Suhbat",
c5:"Yozish",
c6:"O'yinlar",

contactTitle:"Kursga yoziling",

contactText:"Telegram yoki telefon orqali bog'laning.",

copyText:"Raqamni nusxalash uchun bosing.",

footer:"Bolalar uchun rus tili."

}

};

function setLanguage(lang){

document.querySelectorAll("[data-t]").forEach(el=>{

const key=el.dataset.t;

if(translations[lang][key]){

el.textContent=translations[lang][key];

}

});

localStorage.setItem("lang",lang);

}
// ==========================
// PART 2
// ==========================

// ---------- Language Buttons ----------

const langButtons = document.querySelectorAll(".lang");

langButtons.forEach(button=>{

button.addEventListener("click",()=>{

const lang=button.dataset.lang;

setLanguage(lang);

langButtons.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

});

});

// ---------- Load Saved Language ----------

const saved=localStorage.getItem("lang") || "ru";

setLanguage(saved);

langButtons.forEach(button=>{

if(button.dataset.lang===saved){

button.classList.add("active");

}

});

// ---------- Copy Phone ----------

const phone=document.getElementById("copyPhone");
const message=document.getElementById("copyMessage");

if(phone){

phone.addEventListener("click",async()=>{

try{

await navigator.clipboard.writeText("+998942662227");

const lang=localStorage.getItem("lang") || "ru";

const copied={

ru:"✅ Номер скопирован!",

en:"✅ Phone number copied!",

uz:"✅ Telefon raqami nusxalandi!"

};

message.textContent=copied[lang];

}catch(e){

message.textContent="+998 94 266 22 27";

}

});

}

// ---------- Mobile Menu ----------

const mobileBtn=document.getElementById("mobileBtn");
const nav=document.getElementById("nav");

if(mobileBtn){

mobileBtn.addEventListener("click",()=>{

nav.classList.toggle("open");

});

}

// ---------- Scroll Animation ----------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
"section,.card,.course-card,.hero-card"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});
