from fastapi import APIRouter, Request

from src.core.config import CONFIG, templates, BD_API
from pydantic import BaseModel

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