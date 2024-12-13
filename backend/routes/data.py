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
    

@router.get("/data")
async def get_data():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        cur.execute("SELECT * FROM clima_data")
        rows = cur.fetchall()
        cur.close()
        conn.close()

        # Opcional: Formatear los datos en un formato más legible
        data = [
            {"id": row[0], "created_at": row[1], "temperatura": row[2], "humedad": row[3], "localizacion": row[4]}
            for row in rows
        ]
        return {"status": "success", "data": data}
    except Exception as e:
        return {"status": "error", "message": str(e)}