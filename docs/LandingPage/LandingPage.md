## 🔍 Overview

The `LandingPage` component is the main entry point of the NAVIGO app. It introduces users to the game, describes its key features, and provides a call-to-action to begin onboarding via the **Start Quest** button.

## 🧠 Purpose

- Serves as a promotional splash page for first-time or returning users.
- Provides an engaging visual and textual overview of NAVIGO.
- Acts as a gateway to user signup and game exploration.

## 📁 File Path

`src/pages/LandingPage.js`

## 🧩 Component Breakdown

1. **Hero Section**
   - Displays the app name and a brief description.
   - Includes a CTA button (**Start Quest**) that navigates users to the `/SignUp` route using `<Link>` from `react-router-dom`.

2. **Features Section**
   - Highlights four main features using a reusable `FeatureCard` component:
     - 🎯 Location Quests
     - 🗺️ Treasure Hunts
     - 🏅 Collectibles
     - 📊 Leaderboard

3. **Footer**
   - Simple footer with centered copyright.

## 🧱 FeatureCard Component

A stateless sub-component defined within the same file, used to render consistent visual blocks for each feature.

**Props:**
- `icon` – Emoji or symbol representing the feature.
- `title` – Feature title.
- `description` – Short explanation.

## 🎨 Design Notes

- Uses Tailwind CSS for layout and styling.
- Gradient background (blue to indigo) in the hero section.
- Responsive grid layout for features.
- Smooth hover and transition effects for interactive components.

## ⚙️ Dependencies

- React
- `react-router-dom` (for `<Link>` navigation)
- Tailwind CSS (for styling)

## 📌 Planned Enhancements

- Add animations or scroll effects for better engagement.
- Include testimonials or a gameplay preview (video or screenshots).
- Implement dynamic leaderboard data and feature highlights from the backend.

---

**Note:**  
Consider adding semantic HTML and accessibility features as the component evolves.