# Controlled Forms in React Lab

<br>

## Introduction

- In this lab, you’ll explore practical applications of React’s state management through controlled forms. You’ll build a dynamic form that allows users to add entries to a virtual bookshelf, practicing the synchronization of UI and state in React to ensure seamless user interactions.

## What you’ll build

- The local library is adding a feature to its website where users can add their favorite books to a virtual bookshelf.

- You will develop a single component named BookShelf that contains both the controlled form and the display of the bookshelf. Using the useState hook, you will manage the form inputs and list of books, enabling real-time updates to the UI based on user input.

- By the end of this lab, you’ll have a functional application where users can add books to a personalized bookshelf, with each new entry updating the display immediately—no page reloads required!

## Lab exercises
1. Create your component - Create a new component called Bookshelf
2. Define the initial state
3. Create event handlers - handleInputChange & handleSubmit
4. Form creation
5. Map through your books

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
