function loadMenu() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const menu = document.createElement("div")

    menu.className = "rest-menu"
    menu.innerHTML = "Menu here"
    content.appendChild(menu)
    
}

export default loadMenu