# Todo App

A beautiful, minimal, and fully responsive Todo application built with modern web technologies.

## Features
- Add, edit, and delete todos
- Responsive and mobile-friendly design
- Minimal and pastel color palette
- Modern UI with Tailwind CSS
- State management with NgRx
- Routing with Angular Router
- TypeScript support

## Tech Stack
- [Angular 17](https://angular.io/) (Standalone Components)
- [NgRx](https://ngrx.io/) (State Management)
- [Tailwind CSS 3](https://tailwindcss.com/) (Utility-first CSS Framework)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
ng serve
```
The app will be available at [http://localhost:4200](http://localhost:4200).

### Build for Production
```bash
ng build
```

## Folder Structure
```
src/
  app/
    components/      # Angular components (todo-list, add-todo)
    store/           # NgRx store (actions, reducers, selectors)
    ...
  assets/            # Static assets
  styles.scss        # Tailwind CSS entry
  ...
```

## Customization
- You can easily change the color palette in `tailwind.config.js`.
- All UI text is in English and can be customized in the component templates.

## License
This project is open source and available under the [MIT License](LICENSE).
