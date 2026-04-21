from pydantic import BaseModel, Field, ConfigDict, EmailStr

class User(BaseModel):

    username: str = Field(max_length=32)
    bio: str = Field(max_length=1000)
    email: EmailStr

    model_config = ConfigDict(extra="forbid")

class UpdateUser(User):

    id: int