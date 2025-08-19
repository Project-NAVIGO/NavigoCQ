# NAVIGO
**Project Overview**
- NAVIGO is a location-based game for university students that encourages exploration through quests, treasure hunts and rewards. The application consists of:
  - **Frontend**: React.js + Tailwind CSS
  -  **Backend**: Node.js + Express.js
  -  **Database**: Firebase Firestore
  -  **Authentication**: Firebase Auth
  -  **External API**: Google Maps APi for location verification

- We are using the Agile and SCRUM Methodology.
    
**Repository Structure**
- The source codes are stored in the source folder and compiled there.
- The main branch is used to store build files which are compiled to run static files.
  - Our deployment to GitHub Pages and Azure is done from main branch.
    
- The other branches are created by each member for their commits and changes to the main branch. This is done to ensure a clean workflow for each member.

**Running the project**
- Install Node.js & npm
- Verify with:
  node -v
  npm -v
- Navigate to Project & Install Dependencies
  cd your-project
  npm install
- Set Up TailwindCSS
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
- In your CSS file:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- Run Tailwind build:
  npm run dev
- Run server:
  node server.js
  or
  npx nodemon server.js
  
**Testing Strategy**
- Unit Testing : Jest
- Integration Testing : Cypress
- API Testing : Postman
  
**Contributors**
- Katleho Sefuba
- Kgaogelo Nkwana
- Yanga Peter
- Yonwaba Vunda
- Yamkela Vutula
- Kuhle Bikitsh

