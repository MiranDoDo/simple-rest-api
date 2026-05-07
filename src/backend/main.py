from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from sqlalchemy import text
from pathlib import Path
from backend.schemas.schemas import User, UserUpdate, UserDelete
from backend.models.models import metadata_object
from backend.core.core import sync_session, engine

app = FastAPI()

# Получить всех user'ов

@app.get(
    "/db/users",
    tags=["Users"],
    summary="Get all users"
)

def get_users():
    with sync_session() as conn:
        query = "SELECT * FROM users ORDER BY id ASC"
        result = conn.execute(text(query))
        return {"message": f"{result.all()}"}

# Получить user'a по id

@app.get(
        "/db/users/{id}",
        tags=["Users"],
        summary="Get user by id"
)


def get_user_by_id(id: int):
    if id <= 0:
        raise HTTPException(status_code=404, detail="Invalid id")
    else:
        with sync_session() as conn:
            check_query = text(f"""SELECT id FROM users WHERE id = {id}""")
            result = conn.execute(check_query)
            if result.fetchone() is None:
                raise HTTPException(status_code=404, detail="User id doesn't exist")
            elif result.fetchone is not None:
                query = text(f"""SELECT * FROM users WHERE id = {id}""")
                result = conn.execute(query)
                return {"message": f"{result.all()}"}


# Создать новую таблицу

@app.get(
    "/db",
    tags=["Users"],
    summary="Create Users table"
)

def create_table():
    metadata_object.create_all(engine)
    return {"OK": True, "message": "Table Users has been succesfuly created"}

# Добавить нового user'a

@app.post(
    "/db/users",
    tags=["Users"],
    summary="Add new user(core)"
)

def add_user(user: User):
    with sync_session() as conn:
        query = f"""INSERT INTO users (user_name, email) VALUES ('{user.username}', '{user.email}')"""
        conn.execute(text(query))
        conn.commit()
        return {"OK": True, "message": f"{user.username} has been succesfuly created!"}
    
    

# Обновить существующего user'a

@app.put(
    "/db/users",
    tags=["Users"],
    summary="Update user by id"
)

def update_user(user: UserUpdate):
    if user.id <= 0:
        raise HTTPException(status_code=404, detail="Invalid id")
    else:
        with sync_session() as conn:
            check_query = text(f"""SELECT id FROM users WHERE id = {user.id}""")
            result = conn.execute(check_query)
            if result.fetchone() is None:
                raise HTTPException(status_code=404, detail=f"User {id} doesn't exist")
            else:
                query = text(f"""UPDATE users SET user_name = '{user.username}', email = '{user.email}' WHERE id = {user.id};""")
                conn.execute(query)
                conn.commit()
                return {"OK": True, "message": f"{user.id} has been updated: new username - {user.username}; new email - {user.email}"}

# Удалить существующего user'a

@app.delete(
    "/db/users",
    tags=["Users"],
    summary="Delete user by his id"
)

def delete_user(id: UserDelete):
    # Проверка
    if id.id <= 0:
        raise HTTPException(status_code=404, detail="Invalid id")
    else:
        with sync_session() as conn:
            check_query = text(f"""SELECT id FROM users WHERE id = {id.id}""")
            result = conn.execute(check_query)
            if result.fetchone() is None:
                raise HTTPException(status_code=404, detail=f"User {id.id} doesn't exist")
            else:
                query = text(f"""DELETE FROM users WHERE id = {id.id}""")
                conn.execute(query)
                conn.commit()
                return {"OK": True, "message": f"{id.id} user has been deleted"}

# Удалить таблицу users из базы данных

@app.delete(
    "/db",
    tags=["Users"],
    summary="Delete users table"
)

def delete_table():
        metadata_object.drop_all(engine)
        return {"OK": True, "message": "Users table has been succesfuly deleted!"}

frontend_path = Path(__file__).parent.parent / "frontend"
app.mount("/", StaticFiles(directory=str(frontend_path), html=True), name="frontend")