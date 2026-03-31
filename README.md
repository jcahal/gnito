# incoGNITO

A self-destructing secret message app. Create an encrypted drop, share the link — the message is permanently deleted the moment it's read.

**Live:** [gnito-app.onrender.com](https://gnito-app.onrender.com) *(may take ~60s to wake on first visit)*

---

## How it works

1. Write a message, give it a title and password
2. Get a shareable link
3. Recipient opens the link with embedded password, or searches for message using ID and password — message is displayed once then deleted from the database

## Stack

- **Frontend** — Vue.js 2, Vuex, Vue Router
- **API** — Node.js, Express.js
- **Database** — MongoDB

## Running locally

```bash
docker-compose up --build
```

App runs at `http://localhost:8080`, API at `http://localhost:3000`.
