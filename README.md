# Pipeline Builder

**Live Demo:** https://pipeline-builder-9w7z.vercel.app/

A visual workflow editor that lets you design and validate data pipelines using a drag-and-drop interface. Built to catch configuration errors before they become runtime problems.

## Overview

This tool helps you create Directed Acyclic Graph (DAG) workflows visually. You can connect different processing nodes, and the system validates your pipeline structure in real-time to prevent circular dependencies.

### Features

**Visual Editor**
- Five node types: Input, Output, Text, LLM, and Note
- Drag-and-drop interface for building workflows
- Real-time connection validation

**Smart Text Nodes**
- Automatically detects variable placeholders (e.g., `{{variable_name}}`)
- Dynamically generates input handles when variables are detected
- Auto-resizes based on content length

**Pipeline Validation**
- Checks for circular dependencies (DAG validation)
- Counts nodes and edges
- Provides immediate feedback on invalid configurations

## Tech Stack

**Frontend**
- React + React Flow for the visual editor
- Zustand for state management
- Deployed on Vercel

**Backend**
- FastAPI (Python)
- Custom DAG validation algorithm
- RESTful API for pipeline analysis
- Deployed on Render

## Running Locally

### Backend Setup

```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

Backend runs at `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at `http://localhost:3000`

## Testing DAG Validation

To test the loop detection:

1. Add a Text node and type `{{test}}` to create a variable input
2. Add an LLM node
3. Connect: Text (output) → LLM (input)
4. Connect: LLM (output) → Text (input) *(this creates a cycle)*
5. Submit the pipeline

You'll see an error indicating a circular dependency was detected.

## Technical Challenges

**Dynamic Handle Generation**  
Initial implementation had stale handle states. Resolved by implementing a `useEffect` hook that watches text input changes and triggers handle regeneration.

**DAG Cycle Detection**  
Implemented depth-first search with a recursion stack to detect back edges in the directed graph. The algorithm distinguishes between visited nodes and nodes currently in the recursion path to accurately identify cycles.

