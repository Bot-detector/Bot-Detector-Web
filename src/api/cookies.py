from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse

from src.core.config import CONFIG, templates

router = APIRouter()


@router.get("/")
async def cookies(request: Request) -> HTMLResponse:
    return templates.TemplateResponse("pages/cookies.html", {"request": request})
