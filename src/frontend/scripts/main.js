// Получить всех юзеров
async function get_users() {
    const response = await fetch(
        "/db/users", {
        method: "GET"
    })
    if(response.ok){
        const data = await response.json()
        document.getElementById("users").textContent = data.message
    }
}

// Получить юзера по id
async function get_user_by_id() {

    const id = document.getElementById("id_user").value

    const response = await fetch(
        `/db/users/${id}`, {
        method: "POST",
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({
            id: id
        })
    })

    if(response.ok){
        const data = await response.json()
        document.getElementById("users").textContent = data.message
    }

    else if(response.status == 405) {
        if(id != ""){
        const error = await response.json()
        document.getElementById("users").textContent = error.detail
        }
        else if(id == ""){
            document.getElementById("users").textContent = "Must be a number"
        }
    }
    else{
        const error = await response.json()
        document.getElementById("users").textContent = `${error.detail[0]?.msg}`
    }
}

// Добавить юзера
async function add_user() {

    const user = document.getElementById("username").value
    const email = document.getElementById("email").value

    const response = await fetch(
        "/db/users", {
        method: "POST",
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
        body:  JSON.stringify({
            username: user,
            email: email
        })
    })
    if(response.ok){
        const answer = await response.json()
        document.getElementById("users").textContent = answer.message
    }
    else{
        const error = await response.json()
        document.getElementById("users").textContent = `${error.detail[0]?.msg}`
        
    }
}

// Обновить user'a по id

async function update_user() {

    const id = document.getElementById("id_user").value
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value

    const response = await fetch(
        "/db/users", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: id,
            username: username,
            email: email
        })
    })

    if(response.ok){
        const answer = await response.json()
        document.getElementById("users").textContent = answer.message
    }

    else if(response.status == 405) {
        if(id != ""){
        const error = await response.json()
        document.getElementById("users").textContent = error.detail
        }
        else if(id == ""){
            document.getElementById("users").textContent = "Must be a number"
        }
    }
    else{
        const error = await response.json()
        document.getElementById("users").textContent = `${error.detail[0]?.msg}`
    }
}

// Удалить юзера по id
async function delete_user() {

    const id = document.getElementById("id_user").value

    const response = await fetch(
        `/db/users/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: id
        })
    })
    if(response.ok){
        const data = await response.json()
        document.getElementById("users").textContent = data.message
    }

    else if(response.status == 405) {
        if(id != ""){
        const error = await response.json()
        document.getElementById("users").textContent = error.detail
        }
        else if(id == ""){
            document.getElementById("users").textContent = "Must be a number"
        }
    }
    else{
        const error = await response.json()
        document.getElementById("users").textContent = `${error.detail[0]?.msg}`
    }
}

// Создать таблицу users в DataBase

async function create_table() {
    const response = await fetch(
        "/db", {
        method: "GET"
    })
    if(response.ok){
        const data = await response.json()
        document.getElementById("users").textContent = data.message
    }
}

// Удалить таблицу users в DataBase

async function delete_table() {
    const response = await fetch(
        "/db", {
        method: "DELETE"
    })
    if(response.ok){
        const data = await response.json()
        document.getElementById("users").textContent = data.message
    }
}