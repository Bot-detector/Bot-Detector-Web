from fastapi import APIRouter

from src.core.config import CONFIG

router = APIRouter()


@router.get("/")
async def home():
    return {}