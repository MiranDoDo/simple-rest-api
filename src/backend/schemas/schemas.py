from pydantic import BaseModel, Field, ConfigDict, EmailStr

class User(BaseModel):

    username: str = Field(min_length=3, max_length=32)
    email: EmailStr

    model_config = ConfigDict(extra="forbid")

class UserUpdate(User):
    id: int = Field(gt=0)

class UserID(BaseModel):
    id: int = Field(gt=0)