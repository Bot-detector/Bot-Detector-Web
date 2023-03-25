from fastapi import APIRouter, Request

from src.core.config import CONFIG, templates

router = APIRouter()


@router.get("/")
async def contact(request: Request):
    return templates.TemplateResponse("pages/contact.html", {"request": request})