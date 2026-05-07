# simple-REST-api

**The simplest REST API in Python3 using FastAPI and pydantic for data validation**

# Features

- Read user by id
- Read all users
- Add new users
- Update users by id
- Delete users by id

# How to work with this repo

**1. Install PostgreSQL and setup DataBase**

```bash
sudo apt install postgresql postgresql-contrib
```
- DB Name must be 'learn_sql'
- DB Password must be 1234


**2. Clone the repository**

```bash
git clone https://github.com/MiranDoDo/simple-crud-api.git
```

**2. Go to the repository folder**

```bash
cd fastapi/src
```

**Enter into venv**

```bash
. /venv/bin/activate
```


**3. Run**

```bash
fastapi dev main.py
```