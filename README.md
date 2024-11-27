# RBAC (Role-Based Access Control) Dashboard

## Live Demo
https://sajalg364.github.io/RBAC_SYSTEM/

## Overview
This project implements a Role-Based Access Control (RBAC) system for a dashboard application. The system has four distinct roles with varying levels of access:

- **Super Admin**: Full access to manage users and permissions.
- **Admin**: Can view and manage users, but with limited permissions compared to Super Admin.
- **Organizer**: Can view users and filter by role or status.
- **User**: Can view their personal profile and permissions.

The dashboard is built using **React** and **TailwindCSS** for styling, with static API data for demonstration purposes.

## Features
- **Role-Based Navigation**: Different dashboards for different roles (Super Admin, Admin, Organizer, User).
- **User Management** (Super Admin only): Ability to assign roles and permissions to users.
- **Permissions**: Users have varying levels of read, write, and delete permissions based on their roles.
- **Filters**: Organizers can filter users by role or status (Active/Inactive).
- **Responsive Design**: The app is fully responsive with TailwindCSS styling.
- **State Management**: Utilizes React's `useState`, `useEffect`, and `useCallback` for state management and component rendering.

## Tech Stack
- **Frontend**: React.js, TailwindCSS
- **Backend**: Static API (mock data for demo purposes)
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)

## Installation

### Prerequisites
- Node.js (version >= 14)
- npm or yarn

## How to Install

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**

     ```bash
     git clone https://github.com/sajalg364/RBAC_SYSTEM.git
     cd RBAC_SYSTEM

2.  **Install Dependencies:**

    ```bash
    cd frontend
    npm install
    ```
3.  **Run the Application:**

    ```bash
    npm run start
    ```

5.  **Open in Your Browser:**

Open `http://localhost:3000` in your web browser.

## Project Structure

       ├── public
       ├── src
       │   ├── api
       │   ├── components
       │   ├── context
       │   ├── pages
       │   ├── routes
       │   ├── App.css
       │   ├── App.js
       │   ├── main.jsx
       │   └── index.css
       ├── index.html
       ├── tailwind.config.js
       └── package.json
      ── README.md

## Author

Sajal Mahajan \
Email: contact.sajalmahajan364@gmail.com \
LinkedIn : https://www.linkedin.com/in/sajal-mahajan-a58b9524a/ \
Deployed Live Link : https://sajalg364.github.io/RBAC_SYSTEM/

## Thank You

Thank you for exploring RBAC! Your feedback is valuable. If you have any suggestions or thoughts, feel free to share them with us. 😊

---
   
