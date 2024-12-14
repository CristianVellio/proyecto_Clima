from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from routes.data import router as data_router  # Ensure this import is correct

# Load environment variables from .env file
load_dotenv()

# Create FastAPI instance
app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Local for development
        "https://proyecto-clima-azure.vercel.app",  # URL of your deployed frontend on Vercel
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_headers=["Content-Type", "Authorization"],
)

# Main route to check if the backend is working
@app.get("/")
async def root():
    return {"message": "API is running"}

# Include the data router with prefix /api
app.include_router(data_router, prefix="/api")