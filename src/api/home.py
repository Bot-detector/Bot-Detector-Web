from fastapi import APIRouter, Request
from pydantic import BaseModel

from src.core.config import BD_API, CONFIG, templates

router = APIRouter()


class Stats(BaseModel):
    total_bans: int
    total_real_players: int
    total_accounts: int


@router.get("/")
async def home(request: Request):
    stats = await BD_API.get_project_stats()
    stats = Stats(**stats)
    response = {"request": request, "stats": stats.dict()}
    return templates.TemplateResponse("pages/home.html", response)
