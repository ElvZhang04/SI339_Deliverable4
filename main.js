// Javascript used to change themes
function applyTheme(theme) {
  document.body.classList.remove('light-mode', 'dark-mode', 'default-mode');

  if (theme === 'light-mode') {
    document.body.classList.add('light-mode');
  }
  else if (theme === 'dark-mode') {
    document.body.classList.add('dark-mode')
  }
  else if (theme === 'default') {
    document.body.classList.add('default-mode');
  }

  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');

// Always defaults to default theme
const themeToApply = savedTheme || 'default';
applyTheme(themeToApply);

document.getElementById(themeToApply).checked = true;

document.querySelectorAll('input[name="theme"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    applyTheme(event.target.value);
  });
});

// Array of atheletes for filling in pages
const athletes = [
  {name: "Alex Nemecek", image: "images/profiles/18820260.jpg", html: "mens_team/Alex Nemecek18820260.html"},
  {name: "Amir Abston", image: "images/profiles/25395576.jpg", html: "mens_team/Amir Abston25395576.html"},
  {name: "Bruno Cifaldi", image: "images/profiles/21147176.jpg", html: "mens_team/Bruno Cifaldi21147176.html"},
  {name: "Dylan Hanley", image: "images/profiles/23349680.jpg", html: "mens_team/Dylan Hanley23349680.html"},
  {name: "Enshu Kuan", image: "images/profiles/23687884.jpg", html: "mens_team/Enshu Kuan23687884.html"},
  {name: "Ethan Miller", image: "images/profiles/23349703.jpg", html: "mens_team/Ethan Miller23349703.html"},
  {name: "Ezekiel Paloff", image: "images/profiles/23349707.jpg", html: "mens_team/Ezekiel Paloff23349707.html"},
  {name: "Garrett Comer", image: "images/profiles/21615274.jpg", html: "mens_team/Garrett Comer21615274.html"},
  {name: "Adrienne Stewart", image: "images/profiles/21142907.jpg", html: "womens_team/Adrienne Stewart21142907.html"},
  {name: "Ann Kececi", image: "images/profiles/24802381.jpg", html: "womens_team/Ann Kececi24802381.html"},
  {name: "Arabella Kessler", image: "images/profiles/23564883.jpg", html: "womens_team/Arabella Kessler23564883.html"},
  {name: "Ayla Balazer", image: "images/profiles/19352189.jpg", html: "womens_team/Ayla Balazer19352189.html"},
  {name: "Becca Van Lent", image: "images/profiles/24262808.jpg", html: "womens_team/Becca Van Lent24262808.html"},
  {name: "Calla Sopoci", image: "images/profiles/26328689.jpg", html: "womens_team/Calla Sopoci26328689.html"},
  {name: "Elin Tenbrink", image: "images/profiles/23349718.jpg", html: "womens_team/Elin Tenbrink23349718.html"},
  {name: "Elsa Wenzlaff", image: "images/profiles/22520388.jpg", html: "womens_team/Elsa Wenzlaff22520388.html"}
]

const itemsPerPage = 4;
let currentPage = 0;
let previousPage = 0;

function displayPage() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const athletesToDisplay = athletes.slice(start, end);

  athletesToDisplay.forEach(athlete => {
    const athleteDiv = document.createElement("div");
    athleteDiv.classList.add("athlete");
    athleteDiv.innerHTML = `
        <a href="${athlete.html}">
          <p>${athlete.name}</p>
          <img src="${athlete.image}" alt="Photo of ${athlete.name}">
        </a>
    `;
    gallery.appendChild(athleteDiv);
  });

  document.getElementById("prev").disabeled = currentPage === 0;
  document.getElementById("next").disabeled = end >= athletes.length;

  gallery.classList.remove("flip-next", "flip-prev");
  void gallery.offsetWidth;
  if (currentPage > previousPage) {
    gallery.classList.add("flip-next");
  }
  else if (currentPage < previousPage) {
    gallery.classList.add("flip-prev");
  }

  previousPage = currentPage;
}

// For previous and next buttons
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    displayPage();
  }
}

function nextPage() {
  if ((currentPage + 1) * itemsPerPage < athletes.length) {
    currentPage++;
    displayPage();
  }
}

displayPage();