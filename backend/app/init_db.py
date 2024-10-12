from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from .models import Base, Hobby, Achievement



def init_db():
    """
    Initializes the database and inserts initial data.
    """
    # Create tables
    Base.metadata.create_all(bind=engine)
    
    # Create a new database session
    db = SessionLocal()
    try:
        # Define hobbies data
        hobbies = [
            {
                "name": "Motorbike rides",
                "description":
                    "I like riding motorbikes and exploring new places on two wheels. The farthest I have travelled is southern India from Belagavi to Kanyakumari on my bike (Almost 1600 miles on a single trip). And thats my bike behind me, Yamaha MT-15 it was soo good!",
                "image":
                    "https://auctionimages.blob.core.windows.net/lettinghub/IMG_20211225_170725.jpg",
            },
            {
                "name": "Mountain Treks",
                "description":
                    "I have trekked most of the Sahyadri mountain range in Maharashtra, India. I wish to trek more mountains in the future.",
                "image":
                    "https://auctionimages.blob.core.windows.net/lettinghub/IMG_20221228_095510.jpg",
            },
            {
                "name": "Cooking",
                "description":
                    "I almost always cook my own meals, My speciality is Indian cuisine and recently I have started experimenting with other cuisines (The above one is an example). I love spicy food 🌶️ ",
                "image":
                    "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4061.JPG",
            },
            {
                "name": "Football",
                "description":
                    "Whenever I find some time to spare, I like to go out and play football. I am not a great player but I enjoy the game. I also like to watch football matches. Am I united fan ? Yes I am! :( ",
                "image":
                    "https://auctionimages.blob.core.windows.net/lettinghub/0876f316-d4fa-4005-b111-3824d398e6fb.jpg",
            },
        ]

        # Insert hobbies if they don't already exist
        for hobby_data in hobbies:
            hobby = db.query(Hobby).filter(Hobby.name == hobby_data["name"]).first()
            if not hobby:
                hobby = Hobby(**hobby_data)
                db.add(hobby)

        # Define achievements data
        achievements = [
            {
                "name": "Smart India Hackathon Winner 2020",
                "description":
                    "Led Team ABHYUDAY to victory in Smart India Hackathon, one of India's largest hackathons, topic under the Ministry of Health and Family Welfare. Developed an Android application designed to improve response times and services in medical emergencies, addressing problem statement SS-42. Engineered and deployed the application over a challenging 3-day period, focusing on reliable functionality under high-stress, emergency conditions.",
                "image":
                    "https://auctionimages.blob.core.windows.net/lettinghub/1680718119842.jpeg",
            },
            {
                "name": "4th Place - Eyantra Robotics Nation Wide 2016",
                "description":
                    "Secured 4th place in the nationwide Eyantra Robotics hackathon hosted by IIT Bombay. Collaborated in a team to design and build a robot for the Nutty Squirrel challenge over a six-month period. Engineered a solution that demonstrated innovative robotics applications in simulated real-world problem-solving.",
                "image":
                    "https://auctionimages.blob.core.windows.net/lettinghub/5ebb6cbf-5fc0-4ed8-a8a0-346d8c103cc8.JPG",
            },
        ]

        # Insert achievements if they don't already exist
        for achievement_data in achievements:
            achievement = db.query(Achievement).filter(Achievement.name == achievement_data["name"]).first()
            if not achievement:
                achievement = Achievement(**achievement_data)
                db.add(achievement)

        # Commit the transactions
        db.commit()
        print("Database initialized successfully.")
    except Exception as e:
        db.rollback()
        print(f"Error initializing database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    init_db()
