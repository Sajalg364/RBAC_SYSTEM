# RBAC (Role-Based Access Control) Dashboard

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

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/rbac-dashboard.git
   cd rbac-dashboard
