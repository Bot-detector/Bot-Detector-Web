from pydantic import BaseSettings, Field
import os

class Config(BaseSettings):
    RELEASE_VERSION: str = "0.1"



CONFIG: Config = Config(
    # TOKEN=os.environ.get("TOKEN"),
    RELEASE_VERSION="0.1",
)