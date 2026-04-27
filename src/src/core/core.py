from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.config.config import settings

engine = create_engine(
    url=settings.DATABASE_URL_psypopg,
    echo=False,
    pool_size=5
)


sync_session = sessionmaker(engine)


