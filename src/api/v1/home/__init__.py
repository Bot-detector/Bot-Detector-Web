from fastapi import APIRouter

from src.api.v1.home import home

router = APIRouter()
router.include_router(home.router, prefix="/home", tags=["Home"])