## 📄 Overview

The `HomePage` component is a simple React component that renders the landing page of the NAVIGO application. It provides users with a welcoming visual when they first access the site.

## 🛠️ What It Does

- Renders a full-screen section with a welcome message.
- Uses Tailwind CSS utility classes to style and center the content.
- Displays a header: **"Welcome to NAVIGO 🎉"**
- Includes a footer at the bottom with copyright.

## 🔧 Technologies Used

- **React.js** – For component-based rendering.
- **Tailwind CSS** – For utility-first styling.

## 🧱 Component Structure

- **Main Container (`<div>`):**
  - Full screen height (`min-h-screen`)
  - Centers content both vertically and horizontally (`flex`, `items-center`, `justify-center`)
  - Light green background (`bg-green-100`)

- **Header (`<h1>`):**
  - Large, bold text (`text-4xl`, `font-bold`)
  - Dark green color (`text-green-800`)
  - Displays: "Welcome to NAVIGO 🎉"

- **Footer (`<footer>`):**
  - Centered text (`text-center`)
  - Padding and gray background (`p-4`, `bg-gray-200`)
  - Displays: "© 2025 NAVIGO. All rights reserved."

## 🔁 Reusability

This component is static: it does not accept props or manage state. It can be reused or expanded to add more dynamic content in the future.

---

**Note:**  
Consider adding semantic HTML and accessibility features as the component evolves.