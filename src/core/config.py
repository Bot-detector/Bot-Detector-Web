from pydantic import BaseSettings
import os

from src.app.controllers.bot_detector import BotDetector
from src.app.controllers.patreon import Patreon
import dotenv
from fastapi.templating import Jinja2Templates
from src.core.fastapi.middelware import https_url_for

dotenv.load_dotenv()


class Config(BaseSettings):
    BD_TOKEN: str
    ENV: str
    RELEASE_VERSION: str = "0.1"
    PATREON_CLIENT_ID: str = ""
    PATREON_CLIENT_SECRET: str = ""


CONFIG: Config = Config(
    BD_TOKEN=os.environ.get("TOKEN"),
    ENV=os.environ.get("ENV", "PRD"),
    RELEASE_VERSION="0.1",
)

BD_API = BotDetector(token=CONFIG.BD_TOKEN)

PATREON = Patreon(
    client_id=CONFIG.PATREON_CLIENT_ID, client_secret=CONFIG.PATREON_CLIENT_SECRET
)

templates = Jinja2Templates(directory="src/templates")
if CONFIG.ENV != "DEV":
    templates.env.globals["url_for"] = https_url_for.https_url_for
