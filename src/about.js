function loadAbout() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const info = document.createElement("p")
    info.className = "rest-info"
    info.innerHTML = "We are a wonderful restaurant that has opened in the last few years serving asian food!"

    content.appendChild(info)
}

export default loadAbout