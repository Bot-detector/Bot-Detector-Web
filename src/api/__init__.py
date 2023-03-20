from fastapi import APIRouter
from src.api import home, monitoring

router = APIRouter()
router.include_router(monitoring.router, prefix="/monitoring")
router.include_router(home.router, prefix="/home")