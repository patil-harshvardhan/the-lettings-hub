from . import crud
from .database import SessionLocal
from sqlalchemy.orm import Session
from .schemas import AuctionTypeCreate, CreateUserAdmin

def init_db():
    db: Session = SessionLocal()


    try:
        print("Initializing database")
        # check if auction_types are already created in the database crud.get_auction_types()
        auction_types = crud.get_auction_types(db=db)
        if not auction_types:
            auction_types = [
                AuctionTypeCreate(name="English Auction", description="English Auction", short_name="EN"),
                AuctionTypeCreate(name="Dutch Auction", description="Dutch Auction", short_name="DU"),
                AuctionTypeCreate(name="Sealed Bid Auction ", description="Blind Auction", short_name="SB"),
            ]
            crud.create_auction_types(db=db, auction_types=auction_types)
        # check if admin user is already created in the database
        admin_user = crud.get_users_by_type(db=db, user_type="admin")
        if not admin_user:
            admin_user = CreateUserAdmin(username="admin", email="admin.auction@abc.com", password="admin", type="admin", credit_limit=10000)
            crud.create_user_admin(db=db,user=admin_user)
        print("Database initialized Successfully")
    except Exception as e:
        print("Database initialization failed")
        print(e)
    finally:
        db.close()

if __name__ == "__main__":
    init_db()