from pydantic import BaseSettings
import os

from fastapi.templating import Jinja2Templates
from src.app.controllers.bot_detector import BotDetector
from src.app.controllers.patreon import Patreon
import dotenv
import jinja2
from fastapi import Request

dotenv.load_dotenv()



if hasattr(jinja2, "pass_context"):
    pass_context = jinja2.pass_context
else:
    pass_context = jinja2.contextfunction

@pass_context
def https_url_for(context: dict, name: str, **path_params) -> str:
    request:Request = context["request"]
    http_url = request.url_for(name, **path_params)
    if 'https' in str(request.base_url):
        http_url = str(http_url).replace("http", "https")
    return http_url

templates = Jinja2Templates(directory="src/templates")
templates.env.globals["url_for"] = https_url_for

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
