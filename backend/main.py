from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ 測試環境允許所有來源
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 模擬交易數據
mock_transactions = [
    {"id": 1, "sender": "0x123", "receiver": "0x456", "amount": 50, "timestamp": "2025-03-20T12:00:00Z"},
    {"id": 2, "sender": "0x456", "receiver": "0x789", "amount": 100, "timestamp": "2025-03-20T13:00:00Z"},
    {"id": 3, "sender": "0x123", "receiver": "0x789", "amount": 200, "timestamp": "2025-03-20T14:00:00Z"},
]

# 測試 API（回傳假交易數據）
@app.get("/transactions/{wallet}")
def get_transactions(wallet: str):
    filtered_transactions = [tx for tx in mock_transactions if tx["sender"] == wallet or tx["receiver"] == wallet]
    return {"wallet": wallet, "transactions": filtered_transactions}

# API 偵測（測試後端是否運行）
@app.get("/")
def read_root():
    return {"message": "FastAPI 伺服器正在運行 🚀"}


