from fastapi import APIRouter, Request

from src.core.config import templates

router = APIRouter()


@router.get("/contributors")
async def contributors(request: Request):
    return templates.TemplateResponse("pages/contributors.html", {"request": request})
