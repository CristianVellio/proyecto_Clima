from fastapi import APIRouter, Response, HTTPException
from fastapi.responses import JSONResponse
import psycopg2
from psycopg2 import pool
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel, Field
from datetime import datetime
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
    return JSONResponse(
        content={},
        headers={
            "Access-Control-Allow-Origin": "https://proyecto-clima-azure.vercel.app",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Max-Age": "3600"
        }
    )

# Definir ruta HEAD para /data
@router.head("/data")
async def head_data():
    return Response(status_code=200)

@router.get("/data")
async def get_data():
    try:
        conn = connection_pool.getconn()
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT * FROM clima_data ORDER BY created_at DESC")
            rows = cur.fetchall()

          # Serializar el campo datetime (si existe) antes de devolverlo
            for row in rows:
                if row.get("created_at"):
                    row["created_at"] = row["created_at"].isoformat()

        connection_pool.putconn(conn)
        return JSONResponse(
            content={"status": "success", "data": rows},
            headers={
                "Access-Control-Allow-Origin": "https://proyecto-clima-azure.vercel.app"
            }
        )
    except Exception as e:
        return JSONResponse(
            content={"status": "error", "message": str(e)},
            headers={
                "Access-Control-Allow-Origin": "https://proyecto-clima-azure.vercel.app"
            },
            status_code=500
        )

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
        return JSONResponse(
            content={"status": "success", "message": "Data inserted successfully"},
            headers={
                "Access-Control-Allow-Origin": "https://proyecto-clima-azure.vercel.app"
            }
        )
    except Exception as e:
        return JSONResponse(
            content={"status": "error", "message": str(e)},
            headers={
                "Access-Control-Allow-Origin": "https://proyecto-clima-azure.vercel.app"
            },
            status_code=500
        )