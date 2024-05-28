# NESTjs CRUD with PostgreSQL

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up PostgreSQL and create a database
4. Configure the `.env` file with your database credentials
5. Run the application: `npm run start`

## API Endpoints

### Users

- `POST /users`: Create a new user
- `GET /users`: Get all users
- `GET /users/:id`: Get a user by ID
- `PATCH /users/:id`: Update a user by ID
- `DELETE /users/:id`: Delete a user by ID

### WalletAddress

- `POST /wallet-address`: Create a new wallet address
- `GET /wallet-address`: Get all wallet addresses
- `GET /wallet-address/:id`: Get a wallet address by ID
- `PATCH /wallet-address/:id`: Update a wallet address by ID
- `DELETE /wallet-address/:id`: Delete a wallet address by ID
