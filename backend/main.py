from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from routes.data import router as data_router

load_dotenv()

app = FastAPI()

# Update CORS middleware to be more explicit
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://proyecto-clima-azure.vercel.app",  # Exact frontend URL
        "http://localhost:5173"  # Local development
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add a CORS middleware to all routes
@app.middleware("http")
async def add_cors_headers(request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "https://proyecto-clima-azure.vercel.app"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

@app.get("/")
async def root():
    return {"message": "API is running"}

app.include_router(data_router, prefix="/api")