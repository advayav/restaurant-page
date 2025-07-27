import curryPath from "./img/curry.jpg"
import ramenPath from "./img/ramen.jpg"
import soupPath from "./img/soup.jpg"
import wallPath from "./img/wall.jpg"

function loadAbout() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const info = document.createElement("div")
    info.className = "rest-info"
    // info.innerHTML = "We are a wonderful restaurant that has opened in the last few years serving asian food!"
    const textInfo = document.createElement("p")
    textInfo.className = "text-info"
    textInfo.innerHTML = "We are a wonderful restaurant that has come up in the last few years serving asian food!"

    info.appendChild(textInfo)

    const images = document.createElement("div")

    const curry = document.createElement("img")
    curry.className = "img-info"
    curry.src = curryPath
    curry.alt = "A bowl of rice with coconut curry"

    const ramen = document.createElement("img")
    ramen.className = "img-info"
    ramen.src = ramenPath
    ramen.alt = "A bowl of rice with ramen broth and vegetables"

    const soup = document.createElement("img")
    soup.className = "img-info"
    soup.src = soupPath
    soup.alt = "A bowl of miso soup with tofu"

    const wall = document.createElement("img")
    wall.className = "img-info"
    wall.src = wallPath
    wall.alt = "A picture on the wall at the restaurant"

    images.appendChild(curry)
    images.appendChild(ramen)
    images.appendChild(soup)
    images.appendChild(wall)

    content.appendChild(info)
    content.appendChild(images)
}

export default loadAbout