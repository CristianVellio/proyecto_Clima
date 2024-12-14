from fastapi import APIRouter, Response
import psycopg2
from psycopg2 import pool
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel, Field
from config import DATABASE_URL

# Configuración del pool de conexiones
connection_pool = psycopg2.pool.SimpleConnectionPool(1, 10, DATABASE_URL)

class WeatherData(BaseModel):
    temperatura: float = Field(..., ge=-50, le=50, description="Temperatura en grados Celsius (-50 a 50)")
    humedad: float = Field(..., ge=0, le=100, description="Humedad en porcentaje (0-100)")
    localizacion: str = Field(..., max_length=255, description="Descripción de la ubicación")

router = APIRouter()

@router.options("/data")
async def options_data():
    return Response(
        headers={
            "Access-Control-Allow-Origin": "https://proyecto-clima-azure.vercel.app",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        }
    )

# Definir ruta HEAD para /data
@router.head("/data")
async def head_data():
    return Response(status_code=200)

@router.post("/data")
async def insert_data(data: WeatherData):
    try:
        conn = connection_pool.getconn()
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO clima_data (temperatura, humedad, localizacion)
                VALUES (%s, %s, %s)
                """,
                (data.temperatura, data.humedad, data.localizacion),
            )
            conn.commit()
        connection_pool.putconn(conn)
        return {"status": "success", "message": "Data inserted successfully"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@router.get("/data")
async def get_data():
    try:
        conn = connection_pool.getconn()
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT * FROM clima_data ORDER BY created_at DESC")
            rows = cur.fetchall()
        connection_pool.putconn(conn)
        return {"status": "success", "data": rows}
    except Exception as e:
        return {"status": "error", "message": str(e)}