// Получение юзера по id
function button_id() {

    // Удаляем текущее поле
    input_div = document.getElementById("input_div")
    input_div.remove()

    actions = document.getElementById("actions")

    input_div = document.createElement("div")
    input_div.setAttribute("id", "input_div")

    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "get_user_by_id()")

    const input_quest = document.createTextNode("Enter user id")

    input_pole = document.createElement("input")
    input_pole.setAttribute("id", "id_user")

    input_div.appendChild(input_quest)
    input_div.appendChild(input_pole)
    input_div.appendChild(button_fetch)

    document.body.insertBefore(input_div, actions)
}

// Удаление юзера по id
function button_delete_id() {

    // Удаляем текущее поле
    input_div = document.getElementById("input_div")
    input_div.remove()

    actions = document.getElementById("actions")

    input_div = document.createElement("div")
    input_div.setAttribute("id", "input_div")

    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "delete_user()")

    const input_quest = document.createTextNode("Enter user id")

    input_pole = document.createElement("input")
    input_pole.setAttribute("id", "id_user")

    input_div.appendChild(input_quest)
    input_div.appendChild(input_pole)
    input_div.appendChild(button_fetch)

    document.body.insertBefore(input_div, actions)
}

// Добавление юзера
function button_add_user() {

    // Удаляем текущее поле
    input_div = document.getElementById("input_div")
    input_div.remove()

    actions = document.getElementById("actions")

    input_div = document.createElement("div")
    input_div.setAttribute("id", "input_div")

    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "add_user()")

    const input_username = document.createTextNode("Enter username")

    input_pole1 = document.createElement("input")
    input_pole1.setAttribute("id", "username")

    const input_email = document.createTextNode("Enter email")

    input_pole2 = document.createElement("input")
    input_pole2.setAttribute("id", "email")

    input_div.appendChild(input_username)
    input_div.appendChild(input_pole1)
    input_div.appendChild(input_email)
    input_div.appendChild(input_pole2)
    input_div.appendChild(button_fetch)

    document.body.insertBefore(input_div, actions)
}

// Обновить юзера по его id
function button_update_user() {

    // Удаляем текущее поле
    input_div = document.getElementById("input_div")
    input_div.remove()

    actions = document.getElementById("actions")

    input_div = document.createElement("div")
    input_div.setAttribute("id", "input_div")

    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "update_user()")

    const input_id = document.createTextNode("Enter user id")

    input_pole1 = document.createElement("input")
    input_pole1.setAttribute("id", "id_user")

    const input_username = document.createTextNode("Enter username")

    input_pole2 = document.createElement("input")
    input_pole2.setAttribute("id", "username")

    const input_email = document.createTextNode("Enter email")

    input_pole3 = document.createElement("input")
    input_pole3.setAttribute("id", "email")

    input_div.appendChild(input_id)
    input_div.appendChild(input_pole1)
    input_div.appendChild(input_username)
    input_div.appendChild(input_pole2)
    input_div.appendChild(input_email)
    input_div.appendChild(input_pole3)
    input_div.appendChild(button_fetch)

    document.body.insertBefore(input_div, actions)
}