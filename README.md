# EverQuest Character Tracker

An Angular web application for tracking EverQuest characters, equipment, and quest progress. Built to work alongside a Spring Boot backend API.

## Features

- **User management** — register/login with JWT-based authentication
- **Character tracking** — manage characters across servers, including class, level, and AA points
- **Armor slot tracking** — view and update equipped armor per character
- **Epic 1.5 quest tracker** — track progress on Epic 1.5 quest items per character
- **Tier 5 quest tracker** — track Plane of Power Tier 5 quest progress (Xegony key, PoA augments)
- **JSON import** — bulk-import character data via JSON files

## Tech Stack

- **Angular 15** with Angular Material and Bootstrap 5
- **RxJS** for reactive data handling
- **Spring Boot** backend at `http://localhost:8080` (configurable via environment files)

## Prerequisites

- Node.js 16+
- Angular CLI 15: `npm install -g @angular/cli`
- Spring Boot backend running (see backend repo)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   ng serve
   ```

3. Open `http://localhost:4200` in your browser. You will be redirected to the login page.

> The app expects the backend API at `http://localhost:8080/charactertracker/v1/api/`. Update `src/environments/environment.ts` to point to a different host if needed.

## Routes

| Path | Description | Auth Required |
|---|---|---|
| `/login` | Login page | No |
| `/register` | Register new account | No |
| `/users` | User list | Yes |
| `/characters` | Character list | Yes |
| `/character-armor` | Armor slot table | Yes |
| `/epic-1-5` | Epic 1.5 quest tracker | Yes |
| `/tier-5` | Tier 5 quest tracker | Yes |
| `/import` | JSON import | Yes |

## Build

```bash
ng build
```

Build artifacts are output to the `dist/` directory. For a production build:

```bash
ng build --configuration production
```

## Running Tests

```bash
ng test
```

## Project Structure

```
src/app/
  guard/           # Auth guard (route protection)
  interceptor/     # HTTP interceptor (JWT token injection)
  login/           # Login component
  register/        # Registration component
  characters/      # Character list + add-character dialog
  characterarmorslottable/  # Armor slot table
  epic15tracker/   # Epic 1.5 quest tracker
  tier5-quest-tracker/      # Tier 5 quest tracker
  import/          # JSON bulk import
  userlist/        # User list
  model/           # TypeScript interfaces (Character, Armor, Quest, etc.)
  service/         # HTTP services (auth, characters, armor, quests, import)
```