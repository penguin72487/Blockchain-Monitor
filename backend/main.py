from fastapi import FastAPI
import psycopg2

app = FastAPI()

# 連接 PostgreSQL
conn = psycopg2.connect(database="blockchain_db", user="user", password="password", host="localhost", port="5432")

@app.get("/transactions/{wallet}")
def get_transactions(wallet: str):
    cur = conn.cursor()
    cur.execute("SELECT * FROM transactions WHERE sender = %s OR receiver = %s", (wallet, wallet))
    return {"wallet": wallet, "transactions": cur.fetchall()}

# 測試 API
@app.get("/")
def read_root():
    return {"message": "FastAPI 後端已啟動 🚀"}
