# 🚀 Watership React - Full-Stack Course Platform

A modern, gamified course platform inspired by Fireship.io with dark mode, XP system, and responsive design.

## ✨ Features

### 🎮 Gamification
- **XP System**: Earn XP for enrolling in courses
- **Level Progression**: Visual progress bars and level indicators
- **Meme Popups**: Fun congratulatory animations on enrollment
- **Badge System**: Collect badges for achievements

### 🎨 UI/UX
- **Dark Mode**: Beautiful dark theme with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fireship.io Style**: Bold, playful design with gradient backgrounds
- **Smooth Animations**: Hover effects, transitions, and micro-interactions

### 📱 Mobile Responsive
- **Touch-Friendly**: Optimized for mobile devices
- **Responsive Grids**: Adaptive layouts for all screen sizes
- **Mobile Navigation**: Collapsible navbar with hamburger menu

### 🔐 Authentication & Admin
- **User Authentication**: JWT-based login/register system
- **Admin Panel**: Full CRUD operations for courses and categories
- **Role-Based Access**: Separate admin and client interfaces

## 🏗️ Project Structure

```
Watership-React/
├── admin-side/cms-c1/          # Admin dashboard (React + Vite)
├── client-side/client/         # Client-facing app (React + Vite)
└── server-side/               # Backend API (Node.js + Express)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Git Bash (recommended for Windows users)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Watership-React
```

### 2. Install Dependencies

#### Server Setup
```bash
cd server-side
npm install
```

#### Admin Dashboard Setup
```bash
cd admin-side/cms-c1
npm install
```

#### Client App Setup
```bash
cd client-side/client
npm install
```

### 3. Database Setup

#### Configure Database
Edit `server-side/config/config.json`:
```json
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "watership_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

#### Run Migrations & Seeders
```bash
cd server-side
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 4. Environment Variables

Create `.env` files in each project:

#### Server-side/.env
```env
JWT_SECRET=your_jwt_secret_here
PORT=3000
```

#### Admin-side/cms-c1/.env
```env
VITE_API_URL=http://localhost:3000
```

#### Client-side/client/.env
```env
VITE_API_URL=http://localhost:3000
```

### 5. Start Development Servers

#### Terminal 1 - Backend
```bash
cd server-side
npm run dev
```

#### Terminal 2 - Admin Dashboard
```bash
cd admin-side/cms-c1
npm run dev
```

#### Terminal 3 - Client App
```bash
cd client-side/client
npm run dev
```

## 🎯 Available Scripts

### Server-side
```bash
npm run dev          # Start development server
npm run start        # Start production server
npm run migrate      # Run database migrations
npm run seed         # Run database seeders
```

### Admin-side & Client-side
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Run Prettier
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **React Router** - Routing
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Sequelize** - ORM
- **MySQL** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git Bash** - Terminal (Windows)

## 📱 Mobile Responsiveness

The application is fully responsive with:
- **Mobile-first design** approach
- **Touch-friendly** buttons and inputs
- **Responsive grids** that adapt to screen size
- **Collapsible navigation** for mobile devices
- **Optimized images** with proper aspect ratios

## 🎨 Dark Mode

Features include:
- **System preference** detection
- **Manual toggle** with sun/moon icons
- **Persistent storage** in localStorage
- **Smooth transitions** between themes
- **Consistent styling** across all components

## 🚀 Deployment

### Backend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy from the `server-side` directory

### Frontend Deployment (Vercel/Netlify)
1. Build the applications: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Set environment variables for API URLs

### Database Deployment
- Use a cloud database service (e.g., PlanetScale, Railway)
- Update connection strings in production config
- Run migrations on the production database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Inspired by [Fireship.io](https://fireship.io) design
- Built with modern React and Node.js best practices
- Mobile-first responsive design approach
