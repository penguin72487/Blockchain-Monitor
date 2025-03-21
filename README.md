# Blockchain-Monitor

鏈上金流分析工具


**內容摘要**  

本研究聚焦於亞洲地區常見的區塊鏈詐騙金流，包括「殺豬盤」、「愛情詐騙」等，透過開發與優化區塊鏈金流分析工具，協助執法單位與金融機構快速辨識可疑交易，縮短調查時間，提升在地化詐騙標籤的準確度，最終降低詐騙帶來的社會成本。研究將採用AI模型與區塊鏈數據分析，結合可視化工具，提供即時警示與報告生成功能，以提高執法人員的偵查效率，並確保符合KYC/AML等法規要求。


# 雙鑽石分析

[鏈上金流分析工具Hackmd](https://hackmd.io/@penguin72487/ByUcscqHyg)  

[計劃書](鏈上金流分析工具-補助大專學生研究計畫申請書.docx)

# 軟體技術與架構
前端: React.js + Next.js  
後端: FastAPI or Node.js + NestJS  
後端根據子系統彈性選擇  
資料庫:PostgreSQL + TimescaleDB（時間序列分析） + Neo4j（交易關聯分析）  
架構模式:微服務架構microarchitecture


# 前端建置

cd frontend
npm install  
npm run dev

# 後端建置

cd backend
python -m venv venv  # 創建虛擬環境
venv\Scripts\activate  # Windows
pip install -r requirements.txt  # 安裝依賴
uvicorn main:app --host 0.0.0.0 --port 8000 --reload


# 更新後端依賴包文件

cd backend
venv\Scripts\activate 
pip freeze > requirements.txt



# 建制後 quick start

cd backend
venv\Scripts\activate 
pip install -r requirements.txt 
uvicorn main:app --host 0.0.0.0 --port 8000 --reload


cd frontend
npm install  
npm run dev