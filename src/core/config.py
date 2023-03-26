from pydantic import BaseSettings
import os

from fastapi.templating import Jinja2Templates
from src.app.controllers.bot_detector import BotDetector
from src.app.controllers.patreon import Patreon
import dotenv

dotenv.load_dotenv()

templates = Jinja2Templates(directory="src/templates")


class Config(BaseSettings):
    BD_TOKEN: str
    RELEASE_VERSION: str = "0.1"
    PATREON_CLIENT_ID: str = ""
    PATREON_CLIENT_SECRET: str = ""


CONFIG: Config = Config(
    BD_TOKEN=os.environ.get("TOKEN"),
    RELEASE_VERSION="0.1",
)

BD_API = BotDetector(token=CONFIG.BD_TOKEN)

PATREON = Patreon(
    client_id=CONFIG.PATREON_CLIENT_ID, 
    client_secret=CONFIG.PATREON_CLIENT_SECRET
)
