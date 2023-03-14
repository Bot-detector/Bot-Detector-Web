from fastapi import APIRouter

from src.api.v1 import monitoring, home

router = APIRouter()
router.include_router(monitoring.router, prefix="/monitoring")
router.include_router(home.router, prefix="/home")