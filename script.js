const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log('Andrea')

//Andiamo a selezionare il container principale dove vogliamo inserire le card

const teamContainer = document.querySelector('.container-main');

//Creiamo una funzione con un ciclo forEach che andrà a prendere ogni dato dell'Array teamMembers

teamMembers.forEach(function(member) {
  //Andiamo a distrutturare l'oggetto per ogni membro che vogliamo estrarre 
  const {name, role, email, img} = member;
  //Creiamo la card e andiamo a incollare la card precedentemente creata nell'html
  //Usiamo ${} per inserire le variabili all'interno della stringa
  const card = `
    <section class="team">
            <div>
            
                <img src="${img}" alt="${name}" class="team-member-img">
            </div>
            <div class="team-member">
                <h2 class="team-member-name">${name}</h2>
                <p class="team-member-role">${role}</p>
                <a href="#" class="team-member-email">${email}</a>

            </div>

        </section>
  `;
  //Andiamo ad inserire la card all'interno del container principale per poi stamparla nell'html
  teamContainer.innerHTML += card;
});