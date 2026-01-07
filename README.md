### 🏹 Architecture Diagram
```text
┌─────────────┐        ┌──────────────────┐
│   Browser   │        │  Spring Backend  │
│ (React UI)  │        │                  │
│             │  HTTP  │  Chat Controller │
│             ├──────►│  Model Service   │
│             │        │  Inference Engine│
└─────────────┘        └──────────────────┘
        │
        │ sessionStorage
        ▼
 Client-side Session State
```

### 🖥️ Major Components
- Home Page

- Product information

- CTA: New Discussion

- Chat Page

- Sidebar with discussions

- Chat window

- Session-based conversation handling

### 📅 Data Flow (HLD)
- Chat Interaction Flow

- User starts a new discussion

- Frontend generates sessionId

- User sends a message

- Frontend sends:

```POST /api/agent/chat?sessionId=...```

- Backend:

- Validates training state

- Generates response

- Backend returns plain text

- Frontend renders response in chat UI

### 🐜 State Model
```ts
Chat {
  id: string
  title: string
  messages: Message[]
}

Message {
  role: "user" | "assistant"
  content: string
}

```

### 🐘 Component Breakdown
```mathematica
ChatWindow
├── Sidebar
│   ├── New Discussion
│   └── Discussion List
├── ChatHeader
│   └── Home Navigation
├── MessageList
│   ├── UserMessage
│   └── AssistantMessage
└── ChatInput

```
### 🎨User Flow
<img width="1896" height="866" alt="image" src="https://github.com/user-attachments/assets/60cd0b93-778b-421c-ba5f-4b08cc6ff35e" />
<img width="1888" height="618" alt="image" src="https://github.com/user-attachments/assets/3a5888a3-d8ee-45df-924f-cd6a23547483" />
<img width="1892" height="865" alt="image" src="https://github.com/user-attachments/assets/54be6261-17cb-478b-8822-bef15bdf3fd7" />
<img width="1892" height="867" alt="image" src="https://github.com/user-attachments/assets/37187cb2-fb14-4acf-b140-d9754b18232c" />





