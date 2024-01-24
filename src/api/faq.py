from fastapi import APIRouter, Request

from src.core.config import CONFIG, templates

router = APIRouter()


@router.get("/")
async def faq(request: Request):
    return templates.TemplateResponse("pages/faq.html", {"request": request})
