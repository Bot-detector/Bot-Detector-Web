from fastapi import APIRouter, Request

from src.core.config import CONFIG, templates

router = APIRouter()


@router.get("/")
async def account_search(request: Request):
    return templates.TemplateResponse("pages/account_search.html", {"request": request})