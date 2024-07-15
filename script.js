// Seleciona os elementos do DOM para ano, mês, dia e dia da semana
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const dayOfWeek = document.querySelector(".day-of-week");

// Cria um objeto Date com a data atual
const date = new Date();

// Define o texto do elemento ano com o ano atual
year.innerText = date.getFullYear();

// Define o texto do elemento mês com o nome completo do mês atual
month.innerText = date.toLocaleDateString("en", { month: "long" });

// Define o texto do elemento dia com o dia atual do mês
day.innerText = date.getDate();

// Define o texto do elemento dia da semana com o nome completo do dia atual
dayOfWeek.innerText = date.toLocaleDateString("en", { weekday: "long" });
