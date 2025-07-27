function loadContact() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const contact = document.createElement("div")
    contact.className = "rest-contact"
    contact.innerHTML = "Contact Info here"

    content.appendChild(contact)
    
}

export default loadContact