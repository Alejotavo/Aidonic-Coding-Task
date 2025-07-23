# Aidonic Coding Task: Aid Distribution Dashboard

This project is a technical assignment for Aidonic, implementing an **Aid Distribution Dashboard** with both **Web** and **Mobile (React Native)** interfaces.

It demonstrates:
- Clean architecture with Container/Presentation pattern
- SOLID principles
- TypeScript throughout
- Cross‑platform consistency
- Mocked API integration
- Charts and details views
- Tested components and screens

---

## 🚀 Setup & Run Instructions

### ✅ Prerequisites
- Node.js >= 18
- npm or yarn

---

### 🌐 Web
**Install dependencies and run the development server:**
```bash
npm install
npm run dev

```
## 🏗️ Architectural Overview

The architecture follows a **component‑driven approach** with a clear separation of concerns:

**Main structure:**
```text
src/
 ├─ components/   # Reusable UI components
 ├─ pages/        # Route-level components for each page
 ├─ hooks/        # Custom React hooks for logic reuse
 ├─ services/     # API calls and data layer
 ├─ models/       # Shared models
```

## 📸 Screenshots

### 🌐 Web Dashboard

![Distribution List](./docs/screenshots/web-list.png)
*Distribution list with filters and pagination*

![Distribution Details](./docs/screenshots/web-details.png)
*Distribution details page with full info*

![Charts Page](./docs/screenshots/web-charts.png)
*Charts page showing distribution statistics*

---

### 📱 Mobile App

![Mobile List](./docs/screenshots/mobile-list.png)
*Mobile list screen with pull-to-refresh*

![Mobile Details](./docs/screenshots/mobile-details.png)
*Mobile details screen with full distribution info*

