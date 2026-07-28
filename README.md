# ExpenseTracker

ExpenseTracker is a full-stack web application designed to help users manage and monitor their financial transactions. The project features a modular architecture with a dedicated Node.js backend for data persistence and a frontend interface for user interaction, providing a streamlined experience for tracking daily expenses.

## Features

*   **RESTful API Architecture**: Built with a structured backend to handle expense data operations efficiently.
*   **Data Modeling**: Utilizes defined schemas to ensure consistent storage and retrieval of expense records.
*   **Modular Routing**: Organized route handling for clean separation of concerns within the API.
*   **Full-Stack Separation**: Decoupled frontend and backend directories to facilitate independent development and deployment workflows.

## Tech Stack

*   **Runtime**: Node.js
*   **Language**: JavaScript
*   **Architecture**: Client-Server (Full-stack)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or higher recommended)
*   npm (comes bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshneyvijay/ExpenseTracker.git
   cd ExpenseTracker
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

### Running the Application

To start the backend server, navigate to the `backend` directory and run:

```bash
node index.js
```

## Project Structure

```text
ExpenseTracker/
├── backend/            # Server-side logic and API
│   ├── models/         # Database schemas and data models
│   ├── routes/         # API endpoint definitions
│   ├── index.js        # Entry point for the backend server
│   ├── package.json    # Backend dependencies and scripts
│   └── README.md       # Backend-specific documentation
├── frontend/           # Client-side application
│   └── README.md       # Frontend-specific documentation
└── .gitignore          # Git ignore configuration
```

## Scripts

| Command | Description |
| :--- | :--- |
| `npm install` | Installs all required dependencies for the backend. |
| `node index.js` | Starts the backend server. |

## Environment Variables

If the application requires specific configuration (such as database connection strings or port settings), ensure you create a `.env` file in the `backend/` directory. Refer to any provided `.env.example` files if available to ensure all required keys are defined.
