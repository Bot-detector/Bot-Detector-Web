from fastapi import APIRouter
from src.api import monitoring, home, account_search, contributors, contact, faq

router = APIRouter()
router.include_router(monitoring.router, prefix="/monitoring")
router.include_router(home.router, prefix="/home")
router.include_router(account_search.router, prefix="/account-search")
router.include_router(contributors.router, prefix="/contributors")
router.include_router(contact.router, prefix="/contact")
router.include_router(faq.router, prefix="/about")