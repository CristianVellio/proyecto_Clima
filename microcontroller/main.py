import network
import time
from machine import Pin
import dht
import ujson
import urequests as requests

# URL del backend FastAPI
API_URL = "http://192.168.1.2:8000/api/data"

# Inicialización del sensor DHT22 en el pin GPIO15
sensor = dht.DHT22(Pin(15))

# Conexión a la red WiFi
print("Conectando a la red WiFi", end="")
sta_if = network.WLAN(network.STA_IF)
sta_if.active(True)
sta_if.connect('Wokwi-GUEST', '') 
while not sta_if.isconnected():
    print(".", end="")
    time.sleep(0.1)
print(" ¡Conectado!")

# Variable para almacenar los datos previos
prev_weather = ""

while True:
    try:
        print("Midiendo condiciones meteorológicas... ", end="")
        sensor.measure()
        data = {
            "temperatura": sensor.temperature(),
            "humedad": sensor.humidity(),
            "localizacion": "Simulador Wokwi"
        }
        message = ujson.dumps(data)

        if message != prev_weather:
            print("Actualizado!")
            print(f"Enviando datos al backend: {data}")

            # Realiza la solicitud POST al backend
            response = requests.post(API_URL, json=data)
            if response.status_code == 200:
                print(f"Datos enviados exitosamente: {response.json()}")
            else:
                print(f"Error al enviar datos: {response.status_code} - {response.text}")

            prev_weather = message
        else:
            print("Sin cambios en las condiciones meteorológicas")

    except Exception as e:
        print(f"Error: {e}")

    time.sleep(3600)