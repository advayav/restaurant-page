function loadContact() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const contact = document.createElement("div")
    contact.className = "rest-contact"
    // contact.innerHTML = "Contact Info here"

    const message = document.createElement("p")
    message.className = "contact-text"
    message.innerHTML = "Please reach out to us if you have any questions or would like to make a reservation!"

    const email = document.createElement("p")
    email.className = "contact-info"
    email.innerHTML = "Email: restaurant@email.com"

    const phone = document.createElement("p")
    phone.className = "contact-info"
    phone.innerHTML = "Phone No: (000) 000-0000"

    const signoff = document.createElement("p")
    signoff.className = "contact-text"
    signoff.innerHTML = "We look forward to seeing you at our restaurant!!"

    contact.appendChild(message)
    contact.appendChild(email)
    contact.appendChild(phone)
    contact.appendChild(signoff)

    content.appendChild(contact)
    
}

export default loadContact