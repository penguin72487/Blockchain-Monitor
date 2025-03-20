"use client"; // Next.js 13+ 使用 "use client" 確保在前端執行

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [wallet, setWallet] = useState("");
  interface Transaction {
    sender: string;
    receiver: string;
    amount: number;
    timestamp: string;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    if (!wallet) return;
    try {
      console.log("📡 發送請求:", `http://localhost:8000/transactions/${wallet}`);
      const res = await axios.get(`http://localhost:8000/transactions/${wallet}`);
      console.log("✅ API 回應:", res.data);  // 🛠️ 確保 API 有回應正確的數據
      setTransactions(res.data.transactions);
    } catch (error) {
      console.error("❌ API 錯誤:", error);
    }
  };
  

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">測試 FastAPI 金流 API（不連資料庫）</h1>

      {/* 輸入框 */}
      <input
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        placeholder="輸入錢包地址"
        className="border p-2 rounded-md mr-2"
      />

      {/* 查詢按鈕 */}
      <button onClick={fetchTransactions} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        查詢
      </button>

      {/* 交易記錄 */}
      <h2 className="text-xl font-semibold mt-4">交易記錄</h2>
      <ul className="mt-2">
        {transactions.length > 0 ? (
          transactions.map((tx, idx) => (
            <li key={idx} className="border-b py-2">
              {tx.sender} → {tx.receiver} | 💰 {tx.amount} | 🕒 {tx.timestamp}
            </li>
          ))
        ) : (
          <p className="text-gray-500">沒有交易記錄</p>
        )}
      </ul>
    </div>
  );
}
