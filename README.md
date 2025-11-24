Node.js Project API

A robust backend service built with Node.js, TypeScript, and Mongoose. This project uses Vitest for unit testing and code coverage.

🚀 Getting Started

Prerequisites

Node.js: v20 or higher

npm: v10 or higher

MongoDB: Local instance or Atlas URI

Installation

Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

Install dependencies:

npm ci

Environment Setup:
Copy the example environment file and configure your variables.

cp .env.example .env

🛠️ Scripts

Command

Description

npm run dev

Starts the server in development mode with hot-reloading.

npm run build

Compiles TypeScript to JavaScript in dist/.

npm start

Runs the compiled application (production).

npm run lint

Runs ESLint to check for code style issues.

npm run format

Formats code using Prettier.

🧪 Testing & Coverage

We use Vitest for unit and integration testing.

Running Tests

To run the full test suite:

npm run test:unit

📊 Code Coverage

This project enforces high code quality with coverage thresholds.

To generate a coverage report:

npm run test:coverage

Current Coverage Thresholds:
The CI pipeline will fail if coverage drops below these values (configured in vitest.config.ts):

Category

Threshold

Statements

80%

Branches

80%

Functions

80%

Lines

80%

Viewing the Report

After running the coverage command, an interactive HTML report is generated. You can view it by opening:
coverage/index.html in your browser.

📂 Project Structure

src/
├── controllers/ # Route controllers
├── config/ # Configurations
├── models/ # Mongoose models
├── routes/ # Express routes
├── services/ # Business logic
├── shared/ # Shared utilities and types
│ └── utils/
│ └── environment/ # Env vars logic
├── app.ts # App entry point
└── db.ts # Database connection

🤝 Contributing

Open a Pull Request
