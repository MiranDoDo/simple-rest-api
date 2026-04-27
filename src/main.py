from fastapi import FastAPI, HTTPException
from sqlalchemy import text
from src.schemas.schemas import User
from src.models.models import users_table, metadata_object
from src.config.config import settings
from src.core.core import sync_session, engine

app = FastAPI()

# Получить всех user'ов

@app.get(
    "/users",
    tags=["Users"],
    summary="Get all users"
)

def get_users():
    with sync_session() as conn:
        query = "SELECT * FROM users ORDER BY id ASC"
        result = conn.execute(text(query))
        return f"{result.all()}"

@app.get(
        "/users/{user_id}",
        tags=["Users"],
        summary="Get user by id"
)


def get_user_by_id(id: int):
    if id <= 0:
        raise HTTPException(status_code=404, detail="Invalid id")
    else:
        with sync_session() as conn:
            check_query = f"""SELECT id FROM users WHERE id = {id}"""
            result = conn.execute(text(check_query))
            if result.fetchone is None:
                raise HTTPException(status_code=404, detail="User id doesn't exist")
            else:
                query = text(f"""SELECT * FROM users WHERE id = {id}""")
                result = conn.execute(query)
                return f"{result.all()}"


# Создать новую таблицу

@app.get(
    "/users/{new_table}",
    tags=["Users"],
    summary="Create Users table"
)

def create_table():
    metadata_object.create_all(engine)
    return {"OK": True, "message": "Table Users has been succesfuly created"}

# Добавить нового юзера

@app.post(
    "/users/{new_user}",
    tags=["Users"],
    summary="Add new user"
)

def add_user(username: str, email: str):
    with sync_session() as conn:
        query = f"""INSERT INTO users (username, email) VALUES ('{username}', '{email}')"""
        conn.execute(text(query))
        conn.commit()
        return {"OK": True, "message": f"{username} has been succesfuly created!"}

# Обновить существующего юзера

@app.put(
    "/users/{user_update}",
    tags=["Users"],
    summary="Update user by id"
)

def update_user(id: int, new_username: str, new_email: str):
    if id <= 0:
        raise HTTPException(status_code=404, detail="Invalid id")
    else:
        with sync_session() as conn:
            check_query = text(f"""SELECT id FROM users WHERE id = {id}""")
            result = conn.execute(check_query)
            if result.fetchone() is None:
                raise HTTPException(status_code=404, detail=f"User {id} doesn't exist")
            else:
                query = text(f"""UPDATE users SET username = '{new_username}', email = '{new_email}' WHERE id = {id};""")
                conn.execute(query)
                conn.commit()
                return {"OK": True, "message": f"{id} has been updated: new username - {new_username}; new email - {new_email}"}

# Удалить существующего юзера

@app.delete(
    "/users/{user_id}",
    tags=["Users"],
    summary="Delete user by his id"
)

def delete_user(id: int):
    # Проверка
    if id <= 0:
        raise HTTPException(status_code=404, detail="Invalid id")
    else:
        with sync_session() as conn:
            check_query = text(f"""SELECT id FROM users WHERE id = {id}""")
            result = conn.execute(check_query)
            if result.fetchone() is None:
                raise HTTPException(status_code=404, detail=f"User {id} doesn't exist")
            else:
                query = text(f"""DELETE FROM users WHERE id = {id}""")
                conn.execute(query)
                conn.commit()
                return {"OK": True, "message": f"{id} user has been deleted"}

@app.delete(
    "/users",
    tags=["Users"],
    summary="Delete users table"
)

def delete_table():
        metadata_object.drop_all(engine)
        return {"OK": True, "message": "Users table has been succesfuly deleted!"}