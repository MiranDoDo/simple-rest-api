from pydantic import BaseModel, Field, ConfigDict, EmailStr
from sqlalchemy.orm import DeclarativeBase

class User(BaseModel):

    username: str = Field(min_length=3, max_length=32)
    email: EmailStr

    model_config = ConfigDict(extra="forbid")

class UserUpdate(User):
    id: int

class UserDelete(BaseModel):
    id: int


class Base(DeclarativeBase):
    pass