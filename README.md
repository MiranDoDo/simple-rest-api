# simple-REST-api

**The simplest REST API in Python3 using FastAPI and pydantic for data validation**

# Features

- Read user by id
- Read all users
- Add new users
- Update users by id
- Delete users by id
- Create table "users" in PostgreSQL DataBase
- Delete table "users" in PostgreSQL DataBase

# How to work with this repo

**1. Install PostgreSQL and setup DataBase**

Debian/Ubuntu Linux:

```bash
sudo apt install postgresql postgresql-contrib
```
Fedora Linux:

```bash
sudo dnf install postgresql-server postgresql
```
- DB Name must be 'learn_sql'
- DB Password must be 1234

**2. Clone the repository**

```bash
git clone https://github.com/MiranDoDo/simple-crud-api.git
```

**3. Go to the repository folder**

```bash
cd fastapi/src
```

**Enter into venv**

```bash
. /venv/bin/activate
```


**4. Run**

```bash
fastapi dev main.py
```
