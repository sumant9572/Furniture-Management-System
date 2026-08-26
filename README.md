# Furniture Management System

A furniture house management system with a browser-based frontend and a Node.js/Express backend.

## Requirements

- Node.js 18 or newer
- MongoDB running locally on the default port

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000` in a browser.

## Project structure

- HTML pages provide authentication, products, inventory, orders, cart, and checkout views.
- `script.js`, `inventory.js`, and `product-data.js` provide frontend behavior and product data.
- `server.js` provides the Express API and MongoDB connection.