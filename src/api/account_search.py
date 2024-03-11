from fastapi import APIRouter, Form, Request
from fastapi.responses import HTMLResponse

from src.core.config import BD_API, CONFIG, templates

router = APIRouter()


@router.get("/account-search")
async def account_search(request: Request) -> HTMLResponse:
    return templates.TemplateResponse("pages/account_search.html", {"request": request})


@router.post("/account-search")
async def account_search(request: Request, username: str = Form(...)) -> HTMLResponse:
    # You can access the submitted username using the "username" variable
    prediction = await BD_API.get_prediction(name=username)
    response = {"request": request, "prediction": prediction}
    return templates.TemplateResponse("pages/account_search.html", response)
