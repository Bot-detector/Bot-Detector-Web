from fastapi import APIRouter, Request, Form
from fastapi.responses import HTMLResponse

from src.core.config import CONFIG, templates, BD_API


router = APIRouter()


@router.get("/")
async def account_search(request: Request) -> HTMLResponse:
    return templates.TemplateResponse("pages/account_search.html", {"request": request})


@router.post("/")
async def account_search(request: Request, username: str = Form(...)) -> HTMLResponse:
    # You can access the submitted username using the "username" variable
    prediction = await BD_API.get_prediction(name=username)
    response = {"request": request, "prediction": prediction}
    return templates.TemplateResponse("pages/account_search.html", response)
