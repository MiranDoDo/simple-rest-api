from fastapi import FastAPI, HTTPException
from src.models.data import users
from src.schemas.schemas import User
from src.schemas.schemas import UpdateUser

app = FastAPI()

# Получение всех user'ов

@app.get(
    "/users/{all_users}",
    tags=["Users"],
    summary="Get all users")

def get_users():
    return users


# Получение user'а по id

@app.get(
    "/users/{user_id}",
    tags=["Users"],
    summary="Get user by id"
)

def get_user_by_id(id: int):
    if id > len(users) or id == 0 or id < 0:
        raise HTTPException(status_code=404, detail="User with that id doesn't exist.")
    else:
        return users[id-1]


# Добавление user'ов

@app.post(
    "/users",
    tags=["Users"],
    summary="Add new user"
)

def post_user(new_user: User):
    users.append({
        "id": len(users) + 1,
        "username": new_user.username,
        "bio": new_user.bio,
        "email": new_user.email
    })
    return {"OK": True, "message": "New user added"}

# Обновление user'ов

@app.put(
    "/users",
    tags=["Users"],
    summary="Update user by id"
)

def update_user(id: int, new_data: User):
    user = users[id-1]
    user.update({
        "username": new_data.username,
        "bio": new_data.bio,
        "email": new_data.email
    })
    return {"OK": True, "message": f"user {id} has been updated!"}

# Удаление user'ов

@app.delete(
    "/users",
    tags=["Users"],
    summary="Delete user by id"
)

def delete_user(id: int):
    users.pop(id-1)
    return {"OK": True, "message": f"user {id} has been deleted!"}