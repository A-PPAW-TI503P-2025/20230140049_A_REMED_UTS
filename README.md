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

<img width="1920" height="1080" alt="Screenshot 2026-01-30 005411" src="https://github.com/user-attachments/assets/5c247917-8e00-456d-8167-7ae78ec99813" />

<img width="1920" height="1080" alt="Screenshot 2026-01-30 005452" src="https://github.com/user-attachments/assets/9861e84d-cde6-433a-b101-f85fcf6b64fc" />

<img width="1920" height="1080" alt="Screenshot 2026-01-30 005616" src="https://github.com/user-attachments/assets/78a8386c-316e-4d77-bf35-bc9689bc51bd" />

## Screenshots Database

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bf3438ac-a65d-4edf-97fa-a34d70ca618b" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/17c48a51-8963-4ea0-9889-8148630948ae" />
