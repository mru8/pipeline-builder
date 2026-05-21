# My Pipeline Builder Project 🚀

 I built a flow-based pipeline editor where you can drag and drop nodes, connect them, and then check if the whole thing actually works!

## Working
[[No loop and dynamic text node]](videos/v1.mp4)
[[Loop in pipeline]](videos/v2.mp4)

## 🛠️ What's inside?

I spent time making sure the app is both easy to use and smart enough to catch mistakes. Here’s what I did:

### 1. Frontend (React + React Flow)
* **Custom Nodes:** I created 5 different node types (Input, Output, Text, LLM, and a Note node). 
* **The "Smart" Text Node:** This was the fun part! If you type something like `{{my_variable}}`, the node automatically grows a new connection dot on the left side so you can pipe data into it. It also auto-resizes so you don't have to scroll inside a tiny box.
* **Unique IDs:** I made sure every connection point (handle) has a unique ID (like `node_1-output`) so the data doesn't get mixed up.
* **Global State:** I used Zustand to keep track of all the nodes and lines you draw.

### 2. Backend (FastAPI + Python)
* **The Parser:** I made a POST endpoint that takes all that graph data and counts how many nodes and connections you have.
* **The Loop Checker (DAG):** I wrote a script that checks if you accidentally made a "circle" in your connections. Since pipelines should flow in one direction, it detects loops and tells you if the "Directed Acyclic Graph" (DAG) is valid or not.



---

## 🏃 How to get it running

### To start the Backend:
1. Go into the `backend` folder: `cd backend`
2. Install what you need: `pip install fastapi uvicorn`
3. Run the server: `python -m uvicorn main:app --reload`
*The backend should be live at http://localhost:8000*

### To start the Frontend:
1. Go into the `frontend` folder: `cd frontend`
2. Install the packages: `npm install`
3. Launch the app: `npm start`
*The app will open up at http://localhost:3000*

---

## 🧪 How I tested the loop logic
If you want to see the loop detection in action:
1. Drag a **Text Node** and type `{{test}}` to get a left handle.
2. Drag an **LLM Node**.
3. Connect Text (Right) -> LLM (Left).
4. Connect LLM (Right) -> Text (Left).
5. Hit **Submit** and you'll see a friendly alert saying a loop was found!

### 💡 Challenges I ran into:
* **Dynamic Handles:** At first, the dots on the Text Node wouldn't update until I refreshed. I fixed this by using a `useEffect` to watch the text input in real-time.
* **The "Loop" Logic:** I had to brush up on my graph theory to get the DAG check working! It was tricky to make sure it didn't just count connections but actually followed the direction of the arrows.

Thanks for checking out my work!