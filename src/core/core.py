from sqlalchemy import create_engine
from src.config.config import settings

engine = create_engine(
    url=settings.DATABASE_URL_psypopg,
    echo=False,
    pool_size=5
)

