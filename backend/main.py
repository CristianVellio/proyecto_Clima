from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from routes.data import router as data_router  # Importar router de data

# Cargar las variables de entorno
load_dotenv()

# Crear instancia de FastAPI
app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # "http://localhost:5173",  # Local para desarrollo
        "https://proyecto-clima-azure.vercel.app",  # URL de frontend en Vercel
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ruta principal para verificar si el backend está funcionando
@app.get("/")
async def root():
    return {"message": "API is running"}

# Incluir el router de data con prefijo /api
app.include_router(data_router, prefix="/api")