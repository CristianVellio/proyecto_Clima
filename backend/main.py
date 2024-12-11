from fastapi import FastAPI
from dotenv import load_dotenv
from routes.data import router as data_router

load_dotenv()

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "API is running"}


app.include_router(data_router, prefix="/api")