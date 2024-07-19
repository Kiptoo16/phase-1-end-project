const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const appUrl ="https://phase-1-end-project-deploy.vercel.app/room"

fetch(appUrl)
.then(res => res.json())
.then(rooms => rooms.forEach(room => {
  const roomGrid = document.querySelector(".room_grid")
  console.log(room);
  const roomDetails = document.createElement("h1")
  roomDetails.textContent = room.name
  roomGrid.appendChild(roomDetails)
  
  const roomDsc = document.createElement("h3")
  roomDsc.textContent = room.description
  // roomDsc.classList.add (".room_card)
  roomGrid.appendChild(roomDsc)

  const roomPrice = document.createElement("h4")
  roomPrice.textContent = room.price
  roomGrid.appendChild(roomPrice)

  const roomImage = document.createElement ("img")
  roomImage.src = room.image 
  roomGrid.appendChild(roomImage)

}))


menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Define the elements to reveal and their options in an array of objects
const elementsToReveal = [
  { selector: ".header__container p" },
  { selector: ".header__container h1", delay: 500 },
  { selector: ".about__image img", origin: "left" },
  { selector: ".about__content .section__subheader", delay: 500 },
  { selector: ".about__content .section__header", delay: 1000 },
  { selector: ".about__content .section__description", delay: 1500 },
  { selector: ".about__btn", delay: 2000 },
  { selector: ".room__card", interval: 500 },
  { selector: ".service__list li", interval: 500, origin: "right" }
];

// Iterate over elementsToReveal array using forEach to apply ScrollReveal
elementsToReveal.forEach(element => {
  ScrollReveal().reveal(element.selector, {
    ...scrollRevealOption,
    ...element // Spread additional options for each element
  });
});
