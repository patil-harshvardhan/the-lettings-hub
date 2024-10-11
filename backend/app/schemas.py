# app/schemas.py
from pydantic import BaseModel

class HobbySchema(BaseModel):
    id: int
    name: str
    description: str
    image: str

    class Config:
        orm_mode = True

class AchievementSchema(BaseModel):
    id: int
    name: str
    description: str
    image: str

    class Config:
        orm_mode = True
