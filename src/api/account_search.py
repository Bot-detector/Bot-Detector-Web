from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse

from src.core.config import CONFIG, templates

router = APIRouter()


@router.get("/")
async def account_search(request: Request) -> HTMLResponse:
    return templates.TemplateResponse("pages/account_search.html", {"request": request})