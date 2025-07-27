import dumplingPath from "./img/dumplings.jpg"
import ramenbowlPath from "./img/ramen-bowl.jpg"
import springrollPath from "./img/spring-roll.jpg"
import misosoupPath from "./img/soup.jpg"
import "./styles/menu.css"

function loadMenu() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const heading = document.createElement("p")
    heading.className = "page-title"
    heading.innerHTML = "Menu"

    const menu = document.createElement("div")

    menu.className = "rest-menu"
    // menu.innerHTML = "Menu here"
    const item1 = document.createElement("div")
    item1.className = "menu-item"
    item1.innerHTML = `<img src=${dumplingPath} alt="Picture of dumplings" class="food-img">
                        <p class="food-desc">Dumplings (vegetable/pork)</p>
                        <p class="food-price">$8.00</p>`

    const item2 = document.createElement("div")
    item2.className = "menu-item"
    item2.innerHTML = `<img src=${springrollPath} alt="Picture of spring rolls" class="food-img">
                        <p class="food-desc">Spring Rolls (vegetable/chicken)</p>
                        <p class="food-price">$10.00</p>`

    const item3 = document.createElement("div")
    item3.className = "menu-item"
    item3.innerHTML = `<img src=${misosoupPath} alt="Picture of miso soup" class="food-img">
                        <p class="food-desc">Miso soup</p>
                        <p class="food-price">$7.00</p>`

    const item4 = document.createElement("div")
    item4.className = "menu-item"
    item4.innerHTML = `<img src=${ramenbowlPath} alt="Picture of ramen bowl" class="food-img">
                        <p class="food-desc">Ramen (Tofu/Chicken/Pork)</p>
                        <p class="food-price">$18.00</p>`

    menu.appendChild(item1)
    menu.appendChild(item2)
    menu.appendChild(item3)
    menu.appendChild(item4)

    content.appendChild(heading)

    content.appendChild(menu)
    
}

export default loadMenu