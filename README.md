# Expense Tracker
This project is built on `HTML`, `Javascript`, `TailwindCSS` and `React.js`. Here, Vite is used to create a react app.

## Vite Create Link:-
```
npm create vite@latest
```
## Install Node-module Package:-
```
npm i
```
## Install TailwindCSS :-
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## Configure your template path :-
```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Add Tailwind directives to your CSS file :-
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

