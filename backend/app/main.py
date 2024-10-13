# app/main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .models import Base, Hobby, Achievement
from .database import engine, SessionLocal
from .schemas import HobbySchema, AchievementSchema
from .init_db import init_db
from fastapi.middleware.cors import CORSMiddleware

# Create all tables in the database
Base.metadata.create_all(bind=engine)

# Initialize the database with initial data
init_db()

app = FastAPI(
    title="Hobbies and Achievements API",
    description="API to retrieve hobbies and achievements.",
    version="1.0.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    """
    Dependency to get a SQLAlchemy session.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/hobbies", response_model=List[HobbySchema], summary="Get all hobbies")
def get_hobbies(db: Session = Depends(get_db)):
    """
    Retrieve a list of all hobbies.
    """
    hobbies = db.query(Hobby).all()
    return hobbies

@app.get("/achievements", response_model=List[AchievementSchema], summary="Get all achievements")
def get_achievements(db: Session = Depends(get_db)):
    """
    Retrieve a list of all achievements.
    """
    achievements = db.query(Achievement).all()
    return achievements
