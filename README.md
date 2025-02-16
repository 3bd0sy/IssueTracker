# Issue Tracker - README

**Issue Tracker** is a comprehensive task and issue management system with support for authentication, CRUD operations, data export, and advanced filters. The project is built using React and TypeScript, following modern best practices.

---

## Key Features

- **🔐 Secure Authentication:** User login/registration with role-based permissions.
- **📝 Task Management:** Create, read, update, and delete tasks.
- **🔍 Advanced Filtering:** Filter tasks by status (Open, Closed, In-progress) and date.
- **📥 Data Export:** Export tasks to an Excel file.
- **📱 Interactive UI:** Responsive design using TailwindCSS.
- **🧩 Reusable Components:** Modular components for better code reuse.

---

## Technologies Used

| Technology   | Description                  |
| ------------ | ---------------------------- |
| React        | UI library                   |
| TypeScript   | Static type checking         |
| TailwindCSS  | CSS framework for styling    |
| React Router | Client-side routing          |
| Axios        | HTTP client for API requests |
| Vite         | Fast build tool              |

---

## Prerequisites

- Node.js (version 16 or later)
- npm or yarn

---

## Project Structure - Client

```

issue-tracker/Client:
|
├── public/            # Public assets
├── src/
│   ├── components/    # Shared components
│   ├── pages/         # Main pages
│   ├── services/      # API services
│   ├── hooks/         # Custom hooks
│   ├── stores/        # State management (Zustand)
│   ├── types/         # TypeScript types
│   └── assets/        # Static resources
├── .eslintrc.cjs      # ESLint configuration
├── tailwind.config.js # TailwindCSS configuration
└── vite.config.ts     # Vite configuration
```

---
