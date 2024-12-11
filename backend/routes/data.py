from fastapi import APIRouter
import psycopg2
from config import DATABASE_URL

router = APIRouter()

@router.post("/data")
async def insert_data(data: dict):
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO clima_data (temperatura, humedad, localizacion) VALUES (%s, %s, %s)",
            (data["temperatura"], data["humedad"], data["localizacion"]),
        )
        conn.commit()
        cur.close()
        conn.close()
        return {"status": "success"}
    except Exception as e:
        return {"status": "error", "message": str(e)}
