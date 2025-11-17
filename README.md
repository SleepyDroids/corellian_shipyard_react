# Corellian Shipyards Starship Emporium ✨ (React Project)
Star Wars–themed mini e-commerce app built with React.  
Browse a catalog of starships pulled from the SWAPI API, view details, and toss them into a cart that sticks around even if you refresh the page.

> “corellian_shipyard_react” – a tiny shipyard on the edge of the Outer Rim. 🚀

## Live Demo
Deployed with Netlify:  
👉 [Live Site](https://corellianshipyards.netlify.app/)

## Features

### 🌌 Starship Catalog

- Fetches **all pages** of the SWAPI starships endpoint and merges them into a single list.
- Renders each starship as a card with key details: name, model, manufacturer, and cost in credits (when available).
- Uses a responsive grid so the layout doesn’t completely fall apart on smaller screens.

### 🔍 Live Search

- Search bar filters the catalog **as you type**.
- Case-insensitive matching on ship names.
- Shows a friendly “no starships match that search” message when there are zero results.

### 🧭 Routing (React Router)

- `/` – main catalog view.
- `/starships/:id` – detail page for a specific starship, with expanded stats.
- `/cart` – full cart page showing all items and quantity controls.

### 🛒 Cart & Cart Panel

- Add a starship to the cart from the catalog or detail view.
- **Quantity controls**:
  - Increment / decrement buttons per item.
  - When quantity drops from 1 → 0 via decrement, the item is removed from the cart entirely.
- **Cart panel**:
  - Slide-in panel anchored to the right side of the screen.
  - Header icon toggles between a cart and an X to open/close the panel.
  - Quick peek at cart contents without leaving the catalog.
- **Cart page**:
  - More “traditional” cart view with items stacked as product cards.
  - Remove button that appears only when items are in the card.

### 💾 Persistence with Local Storage

- Cart state is synced to `localStorage`.
- On mount, the app reads from `localStorage` and hydrates the cart so users don’t lose their ships on refresh.
- All of this is wired through React state + effects (no external state libraries yet).

## Tech Stack

- **Frontend:** React (functional components + hooks)
- **Routing:** React Router
- **State:** `useState`, `useEffect`
- **Persistence:** `window.localStorage`
- **Styling:** CSS (flexbox + basic responsive layout)
- **API:** [SWAPI – Star Wars API](https://swapi.dev/)
- **Build Tool:** Vite + npm (or yarn)  

# @SleepyDroids 🤖
You can visit the repo for this project by clicking [here](https://github.com/SleepyDroids/corellian_shipyard_react). For all other works, please [click here](https://github.com/SleepyDroids).

