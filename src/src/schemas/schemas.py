from pydantic import BaseModel, Field, ConfigDict, EmailStr

class User(BaseModel):

    username: str = Field(max_length=32)
    email: EmailStr

    model_config = ConfigDict(extra="forbid")