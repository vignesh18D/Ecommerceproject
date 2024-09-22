# MERN E-Commerce Project

## Overview

This project is a full-stack e-commerce application developed using the MERN stack. It consists of three main components:

- **Frontend**: The user-facing part of the application, built with React.
- **Admin**: The admin panel for managing products and other administrative tasks.
- **Backend**: The server-side component, handling API requests and database interactions.

## Project Structure

### Frontend

The `frontend` directory contains the React application for the user interface:

- **`src/Components/`**: Contains reusable components such as:
  - `Navbar`: Navigation bar for the application.
  - `Footer`: Footer component.
  - `ProductDisplay`: Component to display product details.
- **`src/Pages/`**: Contains page-specific components including:
  - `Cart`: Page to manage and display cart items.
  - `Login`: Page for user login and signup.
  - `Product`: Page for displaying individual product details.
  - `Shop`: Main shop page showing product listings.
- **`App.jsx`**: Main entry point for React components.
- **`index.css`**: Global styles for the application.
- **`vite.config.js`**: Configuration file for Vite, the build tool used for development and production builds.

### Admin

The `admin` directory contains the React application for administrative tasks:

- **`src/Components/`**: Includes components for administration such as:
  - `Addproduct`: Component for adding new products.
  - `Listproduct`: Component for listing and managing products.
- **`src/Pages/Admin/`**: Contains the admin dashboard and related pages.
- **`App.jsx`**: Main entry point for admin components.
- **`vite.config.js`**: Configuration file for Vite specific to the admin panel.

### Backend

The `backend` directory contains the server-side code:

- **`index.js`**: Main server file that sets up Express, connects to MongoDB, and defines various API endpoints.
- **`Mongoose Schemas/`**: Contains Mongoose schemas defining data models for products and users.
- **`multer/`**: Manages file uploads for product images.
- **`Routes/`**: Contains routes for various functionalities:
  - **Product Management**: Endpoints to add, remove, and fetch products.
  - **User Management**: Endpoints for user signup, login, and cart operations.
  - **Image Storage**: Manages the uploading and serving of product images.

## Functionality Overview

### Frontend

- **Shop Page**: Displays the main page, new collections, and popular products.
- **Product Pages**: Organizes and shows products by categories like Haircare, Skincare, and Deodorants.
- **Login Page**: Manages user login and signup processes.
- **Cart Page**: Handles cart item management and displays the contents of the cart.

### Admin

- **Add Product Page**: Allows administrators to add new products to the inventory.
- **List Products Page**: Provides a list of all products with details and management options.

### Backend

- **Product Endpoints**: Manages product operations such as adding, removing, and fetching products.
- **User Endpoints**: Manages user-related operations including signup, login, and cart functionality.
- **Authentication**: Implements JWT-based authentication and authorization mechanisms.
- **Image Upload**: Handles uploading and serving of product images.

## Installation

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.

### Admin

1. Navigate to the `admin` directory.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.

### Backend

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Start the server with `node index.js`.

## Contributing

1. Fork the repository.
2. Create a new branch for your changes.
3. Implement your changes and test them thoroughly.
4. Submit a pull request with a detailed description of your modifications.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


