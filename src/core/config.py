from pydantic import BaseSettings, Field
import os

from fastapi.templating import Jinja2Templates
from src.app.controllers.bd_api import BotDetector

templates = Jinja2Templates(directory="src/templates")


class Config(BaseSettings):
    RELEASE_VERSION: str = "0.1"


CONFIG: Config = Config(
    # TOKEN=os.environ.get("TOKEN"),
    RELEASE_VERSION="0.1",
)

BD_API = BotDetector()