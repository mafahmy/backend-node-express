# TypeScript Node Express API

This project is a TypeScript Node Express API that can connect to multiple databases. It is structured to be scalable and maintainable, following best practices for a Node.js application structure.

## Project Structure

The project is organized into several folders, each with a specific purpose:

- **Database**: This folder contains all the database connection logic. It allows the application to connect to different databases based on your configuration.

- **Config**: This folder holds all the configuration files. These files are used to set up and configure your application's settings, such as database connections.

- **Helper**: This folder contains helper functions that are used throughout the application. These functions perform common tasks and can be reused in different parts of the application.

- **Middleware**: This folder contains middleware functions. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

- **Router**: This folder contains all the route definitions for the application. Each file in this folder corresponds to a route that handles specific HTTP requests.

- **Types**: This folder contains TypeScript type definitions. These types are used throughout the application to ensure type safety and improve code quality.

- **Utils**: This folder contains utility functions that are used throughout the application. These functions perform tasks that aren't tied to any specific part of the application.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
npm install
```

Next, create a `.env` file in the root directory of your project and add your database connection details:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
PORT=3131
```

Finally, start the server:

```bash
npm run dev
```

Your server should now be running at `http://localhost:3131`.


