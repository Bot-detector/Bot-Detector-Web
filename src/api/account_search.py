from fastapi import APIRouter, Form, Request
from fastapi.responses import HTMLResponse

from src.core.config import BD_API, templates

router = APIRouter()


@router.get("/account-search")
async def get_account_search(request: Request) -> HTMLResponse:
    return templates.TemplateResponse("pages/account_search.html", {"request": request})


@router.post("/account-search")
async def post_account_search(request: Request, username: str = Form(...)) -> HTMLResponse:
    results = await BD_API.get_prediction(name=username)  # returns a list
    print(results)
    response = {"request": request, "predictions": results}
    return templates.TemplateResponse("pages/account_search.html", response)