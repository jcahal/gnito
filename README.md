# incoGNITO

A self-destructing secret message app. Create an encrypted drop, share the link — the message is permanently deleted the moment it's read.

**Live:** [gnito-app.onrender.com](https://gnito-app.onrender.com) *(may take ~30s to wake on first visit)*

---

## How it works

1. Write a message, give it a title and password
2. Get a shareable link
3. Recipient opens the link, enters the password — message is displayed once then deleted from the database

## Stack

- **Frontend** — Vue.js 2, Vuex, Vue Router, hosted as a static site on Render
- **API** — Node.js, Express, hosted on Render (free tier)
- **Database** — MongoDB, running as a private container service on Render

## Running locally

```bash
docker-compose up --build
```

App runs at `http://localhost:8080`, API at `http://localhost:3000`.
