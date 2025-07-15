from fastapi import FastAPI,Request
import requests


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
        )

@app.get("/")
async def get_ip(request: Request):
    client_ip = request.client.host
    user_agent = request.headers.get("user-agent", "Unknown")
    try:
        resp = requests.get(f"http://ip-api.com/json/{client_ip}")
        geo = resp.json()
    except Exception as e:
        geo = {"error": str(e)}

    result = {
        "ip": client_ip,
        "country": geo.get("country"),
        "region": geo.get("regionName"),
        "city": geo.get("city"),
        "zip": geo.get("zip"),
        "isp": geo.get("isp"),
        "org": geo.get("org"),
        "lat": geo.get("lat"),
        "lon": geo.get("lon"),
        "user_agent": user_agent
    }
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000,reload=True)