from fastapi import FastAPI
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from src import api
from src.core.config import CONFIG
from fastapi.staticfiles import StaticFiles

# TODO: logging

def init_routers(_app: FastAPI) -> None:
    _app.include_router(api.router)


def make_middleware() -> list[Middleware]:
    middleware = [
        Middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )
    ]
    return middleware


def create_app() -> FastAPI:
    _app = FastAPI(
        title="Bot-Detector-Web",
        description="Bot-Detector-Web",
        version=CONFIG.RELEASE_VERSION,
        middleware=make_middleware(),
    )
    init_routers(_app=_app)
    _app.mount("/static", StaticFiles(directory="src/static"), name="static")
    return _app


app = create_app()

@app.get("/")
def root():
    return RedirectResponse(url="/home")