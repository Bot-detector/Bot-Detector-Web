from fastapi import APIRouter
from src.api import home, monitoring,contact,about

router = APIRouter()
router.include_router(monitoring.router, prefix="/monitoring")
router.include_router(home.router, prefix="/home")
router.include_router(contact.router, prefix="/contact")
router.include_router(about.router, prefix="/about")