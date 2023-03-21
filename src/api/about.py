from fastapi import APIRouter, Request

from src.core.config import CONFIG, templates

router = APIRouter()


@router.get("/")
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})