console.log("Code is running!!")

import imgPath from "./img/restaurant.jpg"
import loadAbout from "./about"
import loadMenu from "./menu"
import loadContact from "./contact"

const content = document.getElementById("content")

function loadHome() {
    content.innerHTML = ""
    const heading = document.createElement("h1")
    heading.className = "page-title"
    heading.innerHTML = "Welcome to Restaurant"

    content.appendChild(heading)

    const restImg = document.createElement("img")
    restImg.src = imgPath
    restImg.alt = "Restaurant Image"
    restImg.className = "rest-img"

    content.appendChild(restImg)

    const desc = document.createElement("p")
    desc.innerHTML = "Come on down and visit us to see why we are so well loved in the community. We love having you here!"
    desc.className = "rest-desc"

    content.appendChild(desc)
}

loadHome()

const home = document.getElementById("home-btn")
const about = document.getElementById("about-btn")
const menu = document.getElementById("menu-btn")
const contact = document.getElementById("contact-btn")

home.addEventListener("click", () => loadHome())
about.addEventListener("click", () => loadAbout())
menu.addEventListener("click", () => loadMenu())
contact.addEventListener("click", () => loadContact())

