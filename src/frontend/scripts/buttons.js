// Получение юзера по id
function button_id() {

    // Удаляем текущее поле
    input_div = document.getElementById("input_div")
    input_div.remove()

    actions = document.getElementById("actions")

    input_div = document.createElement("div")
    input_div.setAttribute("id", "input_div")

    input_br = document.createElement("br")

    // Текст пояснения, для чего нужно данное поле ввода(Id)
    const input_quest = document.createTextNode("Enter user id")

    input_pole = document.createElement("input")
    input_pole.setAttribute("id", "id_user")

    // Кнопка отправки данных
    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "get_user_by_id()")

    input_div.append(
        input_quest, input_br,
        input_pole, button_fetch
    )

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

    input_br = document.createElement("br")

    // Текст пояснения, для чего нужна данное поле ввода(Id)
    const input_quest = document.createTextNode("Enter user id")

    input_pole = document.createElement("input")
    input_pole.setAttribute("id", "id_user")

    // Кнопка отправки данных
    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "delete_user()")

    input_div.append(
        input_quest, input_br,
        input_pole, button_fetch
    )

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

    input_br1 = document.createElement("br")
    input_br2 = document.createElement("br")
    input_br3 = document.createElement("br")
    input_br4 = document.createElement("br")

    // Текст пояснения, для чего нужна данное поле ввода(Username)
    const input_username = document.createTextNode("Enter username")

    input_pole1 = document.createElement("input")
    input_pole1.setAttribute("id", "username")

    // Текст пояснения, для чего нужна данное поле ввода(Email)
    const input_email = document.createTextNode("Enter email")

    input_pole2 = document.createElement("input")
    input_pole2.setAttribute("id", "email")

    // Кнопка отправки данных
    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "add_user()")

    input_div.append(
        input_username, input_br1, input_pole1,
        input_br2, input_email, input_br3,
        input_pole2, input_br4, button_fetch
    )

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

    input_br1 = document.createElement("br")
    input_br2 = document.createElement("br")
    input_br3 = document.createElement("br")
    input_br4 = document.createElement("br")
    input_br5 = document.createElement("br")
    input_br6 = document.createElement("br")

    // Текст пояснения, для чего нужна данное поле ввода(Id)
    const input_id = document.createTextNode("Enter user id")

    input_pole1 = document.createElement("input")
    input_pole1.setAttribute("id", "id_user")

    // Текст пояснения, для чего нужна данное поле ввода(Username)
    const input_username = document.createTextNode("Enter username")

    input_pole2 = document.createElement("input")
    input_pole2.setAttribute("id", "username")

    // Текст пояснения, для чего нужна данное поле ввода(Email)
    const input_email = document.createTextNode("Enter email")

    input_pole3 = document.createElement("input")
    input_pole3.setAttribute("id", "email")

    // Кнопка отправки данных
    button_fetch = document.createElement("button")
    button_fetch_text = document.createTextNode("post")
    button_fetch.appendChild(button_fetch_text)
    button_fetch.setAttribute("onclick", "update_user()")


    input_div.append(
        input_id, input_br1, input_pole1,
        input_br2, input_username, input_br3,
        input_pole2, input_br4, input_email,
        input_br5, input_pole3, input_br6, button_fetch
    )

    document.body.insertBefore(input_div, actions)
}