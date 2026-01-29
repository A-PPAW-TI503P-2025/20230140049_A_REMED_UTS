# Library System (Remedial UCP 1)

## Setup & Run
1. Pastikan MySQL jalan di port 3308.
2. `npm install`
3. `node server.js`

## Endpoints
- **GET** `/api/books` (Public)
- **POST** `/api/books` (Header: `x-user-role: admin`)
- **POST** `/api/borrow` (Header: `x-user-role: user`, `x-user-id: 1`)
  - Body: `{ "bookId": 1, "latitude": -6.2, "longitude": 106.8 }`

## Screenshots