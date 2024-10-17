# NeighborhoodAid

## License
MIT License

## Description

NeighborhoodAid is a **RESTful API** and **React-based** platform designed to empower citizens to report local issues such as potholes, streetlight outages, or vandalism. The platform provides a seamless user experience where individuals can track the progress of their reports, receive real-time updates when issues are resolved, and engage with others in their community. By bringing communities together, NeighborhoodAid aims to foster civic engagement, transparency, and collaboration in solving local problems.

## Motivation

The motivation behind NeighborhoodAid is to provide a practical and comprehensive solution for civic engagement and local issue resolution. The goal is to streamline the process of reporting, tracking, and managing community issues while fostering community interaction and collaboration. We believe that when communities work together, they become stronger and more resilient, and our platform serves as a bridge to facilitate that collaboration.

NeighborhoodAid encourages users to:

- **Empower their community** by addressing small problems before they escalate.
- **Engage collaboratively** with neighbors on larger projects.
- **Maintain transparency** by tracking issue resolution in real-time.
- **Stay informed** with up-to-date weather and location information relevant to their reports.

## Core Features

- **Reporting System**: Users can report various local issues using an interactive map and real-time weather data.
- **Progress Tracking**: Users receive updates on the status of their reports, promoting transparency.
- **Community Engagement**: A community feed where users can engage with others about neighborhood updates and events.
- **Weather Information**: Real-time weather updates based on the user's location.
- **Authentication**: Secure login and registration functionalities using JWT, bcrypt, and social media integrations.

## Table of Contents

- [What We Did](#what-we-did)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Attribution Watermark](#attribution-watermark)
- [Credits](#credits)
- [Version 2.0](#version-20)
- [License](#license)
- [Badges](#badges)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Future Implementations](#future-implmentations)
- [Questions](#questions)
- [Check Out the Project on Render](#render)
- [NeighborhoodAid in Action](#-neighborhoodAid-in-action)

## What We Did  

During the development of NeighborhoodAid, we gained hands-on experience and deep insights into various technologies and concepts, building a robust, user-friendly platform focused on civic engagement and issue reporting.

### 1. Frontend Development with React, Tailwind CSS, and Vite  

- Structured and managed a component-based architecture efficiently using **React** and **TypeScript**.
- Utilized **Tailwind CSS** for consistent, responsive, and mobile-friendly designs, maintaining a unified visual identity across the platform.
- Developed reusable components like **modals, forms, and navigation bars** to optimize development speed and maintain code reusability.
- Incorporated dynamic maps using **React Leaflet** for seamless marker interaction during report submission and editing.
- Implemented a **task manager and community feed** in the dashboard, enabling users to **create, edit, and delete tasks and posts** in real time.
- Provided weather updates within the dashboard using the **Weather component** to show the weather at the user’s current location.
- Used **Vite** for fast, efficient frontend development and bundling.

### 2. Backend Development with Node.js, Express.js, and Sequelize  

- Implemented a **RESTful API** using **Express.js**, managing routes for user authentication, feed management, reporting, and weather data retrieval.
- Gained experience with **Sequelize and Sequelize CLI** for database modeling, migrations, and associations, ensuring data integrity and relationship consistency across models.
- Configured **CORS** and logging middlewares to secure and monitor API requests, improving server reliability and performance.
- Developed backend routes to handle **CRUD operations** for reports, tasks, comments, and user authentication.

### 3. Authentication and Security Techniques  

- Implemented secure authentication mechanisms using **bcrypt** for password hashing and **JWT** for session management, ensuring data privacy.
- Developed **JWT-based authentication** to manage session handling, with protected routes ensuring only authorized users can submit, edit, and delete reports.
- Integrated plans for **Spotify API** to enhance user engagement through community playlists.

### 4. API Integration and State Management  

- Integrated multiple APIs to provide weather updates and geolocation services:
  - **OpenWeather API** for weather data.
  - **OpenWeather Geolocation API** for weather data based on coordinates.
  - **OpenStreetMap** and **Nominatim** APIs for location-based services.
  - **Browser Geolocation API** to fetch the user’s location client-side.
- Developed an **interactive map component** using **React Leaflet**, enabling users to **drag and drop markers** to report or adjust issue locations.
- Implemented state management to handle **user sessions, map markers, report filters, tasks, and feed posts**, ensuring a responsive and intuitive user experience.

### 5. Full-Stack Development and Deployment  

- Connected the **frontend and backend** using RESTful principles to ensure smooth communication and consistent data flow.
- Configured the **backend for production deployment**, ensuring compatibility with client-side routing in React.
- Managed sensitive data using **dotenv**, ensuring secure handling of API keys, database credentials, and other environment variables.

### 6. Database Management and Migrations  

- Designed and managed database models and associations using **Sequelize**, ensuring proper relationships between users, reports, and comments.
- Developed and executed **migrations** to handle schema changes and maintain data integrity.
- Created **seed files** for testing and development purposes, simulating realistic data during development cycles.

### 7. Responsive and Accessible Design  

- Ensured all components were **responsive** across various screen sizes using Tailwind CSS utilities.
- Focused on accessibility standards by using **semantic HTML elements** and enabling **keyboard navigation** throughout the platform.
- Designed the UI to be **mobile-friendly** and consistent across different devices.

### 8. Collaboration and Version Control  

- Used **Git and GitHub** to manage collaborative development, feature branches, pull requests, and merge conflicts efficiently.
- Conducted **peer code reviews** and implemented **testing strategies** for both frontend and backend to maintain high code quality.
- Managed development milestones through well-documented GitHub issues and pull requests.

---

## Technologies Used  

- **Frontend**: React, Vite, TypeScript, Tailwind CSS  
- **Backend**: JavaScript, Node.js, Express.js, Sequelize, Sequelize CLI, CORS  
- **Database**: PostgreSQL  
- **APIs**: OpenWeather API, OpenWeather Geolocation API, OpenStreetMap, Nominatim, Browser Geolocation API  
- **HTTP Client**: Axios  
- **Testing**: Postman for backend testing  
- **Deployment**: Vite for frontend, Node.js for backend  

---

NeighborhoodAid has evolved into a dynamic platform, providing users with tools to **report, track, and engage with community issues**. The platform emphasizes security, accessibility, and scalability, ensuring seamless user experiences across devices and browsers. Through continuous development, the platform is well-positioned to foster meaningful community interactions and collaborations.

## Features  

- **Dynamic Issue Reporting**:  
  - Users can create, edit, delete, and track the status of community issues.  
  - Reports are displayed on an **interactive map**, allowing precise location adjustments through **drag-and-drop markers**.  
  - CRUD functionality enables users to manage their reports and track their progress in real-time.

- **Task Management on Dashboard**:  
  - Users can create, edit, delete, and complete tasks directly from the **dashboard**.  
  - Completed tasks are visually marked, encouraging productivity and engagement.  

- **Interactive Maps**:  
  - Integration with **OpenStreetMap** and **Nominatim API** for precise geolocation services.  
  - Users can adjust report locations dynamically with **React Leaflet's drag-and-drop markers**.

- **Weather Updates**:  
  - Real-time weather information is provided for the user's current location using the **OpenWeather API**.  
  - Weather data is displayed directly on the dashboard, helping users make informed decisions about outdoor activities or tasks.

- **Community Engagement and Feed Management**:  
  - Users can post, edit, and delete comments in a **community feed**.  
  - The feed fosters conversations and promotes neighborhood engagement around reported issues or community events.  
  - Users can **track the status of community discussions** and share updates with neighbors.

- **Authentication and Security**:  
  - Secure **JWT-based authentication** ensures that users can only manage their own reports, tasks, and posts.  
  - Plans to integrate the **Spotify API** will allow users to **share music playlists** and create collaborative community experiences.

- **Mobile-Responsive and Accessible Design**:  
  - The platform is optimized for accessibility, ensuring a seamless experience on various devices and screen sizes.  
  - Components are built with **Tailwind CSS** to maintain consistency and mobile responsiveness throughout the platform.

- **AI-Powered Sentiment Analysis (Planned)**:  
  - Future updates will include **AI-based sentiment analysis** to assess user discussions and provide relevant, personalized recommendations.

- **Full CRUD Functionality**:  
  - Users can perform **create, read, update, and delete (CRUD)** operations across tasks, reports, and comments, offering complete control over their interactions and contributions to the platform.

## Installation

1. Clone the repository: `git clone https://github.com/mirasoldavila13/NeighborhoodAid.git`
2. Navigate to the project directory: `cd NeighborhoodAid`
3. Install the required dependencies: `npm install`
4. Run the application:
   - For development: `npm run start:dev`
   - For production: `npm start`

## Usage

NeighborhoodAid allows users to report community issues, track their progress, and engage with others in their neighborhood. To get started:
1. Clone the repository and install dependencies as described above.
2. Run the application using `npm start`.
3. Access the platform through your browser at `http://localhost:3001`.

> **Note**: Ensure that all required API keys are set up in your environment variables.

## Attribution Watermark

NeighborhoodAid initially originated as a group project. However, due to team availability and shifting responsibilities, the project has since been further developed and expanded individually by **Mirasol Davila**. All subsequent feature implementations, optimizations, and refinements were led solely by Mirasol Davila to enhance the platform’s functionality, scalability, and user experience.

## Credits

### Version 1.0 Contributions

**Mirasol Davila** served as the **Lead Full Stack Developer** for the initial version of NeighborhoodAid, taking charge of the majority of development tasks. Below is a summary of the key contributions made by Mirasol Davila:

| **Component/Feature**            | **Description**                                                                                                                                            | **Details**                                                                                                                                                                                                 |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **GitHub Issue Template**      | Created a standardized GitHub issue template for user stories and issues.                                                | - Ensured consistency in the creation of 16 GitHub issues, covering frontend, backend, and API integration tasks.                                                                                                                                                                                                                                                                                                |
| **Official Logo**              | Designed the official logo for the platform.                                                                             | - Developed multiple logo concepts emphasizing community, support, and local engagement.                                                                                                                                                      | **LandingPage.tsx**              | Developed as the main entry point for the Neighborhood Aid platform.                                                                                       | Integrated child components (Nav, Hero, Features, FAQ, Testimonials, Newsletter, Footer) using React and TypeScript for a cohesive, maintainable, and responsive design with Tailwind CSS.                  |
| **Nav.tsx**                      | Designed and developed the navigation component for desktop and mobile views.                                                                              | Implemented dynamic menu state management, responsive design with Tailwind CSS, accessibility enhancements using semantic HTML, and consistent visual styling for hover and interaction states.              |
| **Newsletter.tsx**               | Created a subscription section to encourage user engagement and sign-ups.                                                                                  | Developed responsive form elements, incorporated Tailwind CSS for consistent styling, and ensured accessibility with semantic structuring and clear placeholder texts.                                       |
| **FAQ.tsx**                      | Built an interactive FAQ section using an accordion-style interface.                                                                                       | Managed state with `useState`, implemented dynamic styling for active states using Tailwind CSS, and ensured accessibility with semantic HTML and screen reader support.                                    |
| **Features.tsx**                 | Showcased platform features using an interactive tab system.                                                                                               | Developed dynamic feature panels with React, integrated SVG assets, and used Tailwind CSS for responsiveness and consistent styling.                                                                         |
| **Pricing.tsx**                  | Developed the Pricing component highlighting different subscription plans.                                                                                 | Designed tiered pricing cards with Tailwind CSS, integrated navigation components, ensured responsive behavior across devices, and included interactive CTAs to drive user engagement.                       |
| **Testimonials.tsx**             | Built the Testimonials component to showcase user feedback.                                                                                                | Implemented a responsive grid layout, applied Tailwind CSS for consistent styling, and created a dynamic testimonial display system with hover effects and interactive design elements.                       |
| **MapWithAddress.tsx**           | Developed an interactive map component using React, TypeScript, and React Leaflet.                                                                         | Integrated OpenStreetMap, Nominatim, and OpenWeather APIs for robust geolocation capabilities and developed dynamic marker handling and state management for a user-friendly experience.                    |
| **ReportPage.tsx**               | Created the Report page for users to submit detailed reports about local issues.                                                                           | Integrated `MapWithAddress` for location selection, weather data fetching, and developed a comprehensive form with Tailwind CSS for a streamlined reporting experience.                                      |
| **authService.ts**               | Enhanced the authentication service to include registration, login, and Spotify API integration.                                                            | Developed robust JWT token management, error handling, and session management functionalities. Implemented Spotify API calls for fetching user playlists and managing authentication tokens.                 |
| **Middleware Implementations**   | Added critical middlewares to manage and secure server requests.                                                                                           | Implemented CORS for cross-origin requests, logger for monitoring and debugging, and error handling middleware for consistent API responses.                                                                |
| **Database Migrations**          | Developed migrations for essential tables such as Users, Issues, Feeds, and Comments using Sequelize.                                                      | Applied up and down migrations to manage schema changes, implemented validation rules, and ensured schema alignment with project requirements.                                                               |
| **Database Modeling**            | Defined and managed associations between Sequelize models for Feeds, Comments, and Users.                                                                  | Implemented relationships (`belongsTo`, `hasMany`) and ensured proper model initialization for data integrity.                                                                                              |
| **API Routes Contributions**     | Developed robust API routes for managing authentication, community feeds, and reporting issues.                                                            | Implemented routes for creating, updating, deleting, and fetching feed posts. Integrated report submission routes with weather and geolocation APIs for enhanced context and error handling mechanisms.      |
| **Database Seeding Contribution**| Created seed scripts for populating authority reports for testing and development purposes.                                                                | Developed seed files using Sequelize’s bulkCreate with error handling and structured sample data for realistic testing scenarios.                                                                            |
| **.sequelizerc Configuration**   | Customized the `.sequelizerc` file to ensure organized paths for migrations, models, and seeders.                                                          | Configured paths for models, seeders, and migrations, ensuring consistent file structuring and ease of access for development and database management.                                                       |
| **Server Configuration**         | Enhanced the `server.js` file with middleware integration, route organization, and production setup.                                                        | Integrated CORS, logger, and error handling middleware, structured routes for clarity, and set up production configuration for serving the client-side application.                                           |
| **Modal.tsx**                    | Developed a reusable modal component for displaying dynamic messages.                                                                                      | Implemented flexible props for type safety, dynamic rendering based on state, and used Tailwind CSS for styling. Ensured reusability and accessibility across modules.                                        |
| **Weather.tsx**                  | Developed a component to provide real-time weather updates.                                                                                                | Integrated multiple APIs (browser geolocation, OpenWeather) and used Axios for API calls. Styled with Tailwind CSS for a clean and responsive display. Included error handling for user feedback.            |
| **Hero.tsx**                     | Designed the hero section for the platform’s landing page.                                                                                                 | Structured a visually engaging layout with responsive flex settings, integrated SVG images, and styled text for emphasis. Ensured the component is responsive and accessible.                                 |
| **DashboardNav.tsx**             | Developed the dashboard navigation component for logged-in users.                                                                                          | Included navigation links, integrated authentication checks, and implemented logout functionality. Styled with Tailwind CSS for responsive behavior and user experience.                                      |
| **Dashboard.tsx**                | Developed the Dashboard page, providing an interactive community feed and weather updates.                                                                  | Implemented authentication checks, dynamic post management (like, comment, edit, delete), and integrated the Weather component. Styled for consistency using Tailwind CSS.                                   |
| **Login.tsx & UserRegistration.tsx**| Created the login and registration pages for secure user authentication.                                                                                   | Integrated form validation, used `authService` for login and registration functionality, implemented a modal for feedback, and styled with Tailwind CSS for a professional and responsive design.           |
| **RESTful API Implementation**   | Built the backend API using Express.js to follow RESTful principles for efficient and organized data handling.                                              | Developed routes for CRUD operations across various models (e.g., user registration, feeds, reporting), ensuring data integrity and secure interactions with authentication middleware.                      |
| **Full-Stack Development**       | Combined frontend and backend technologies to create a seamless and integrated platform.                                                                    | Utilized React and TypeScript for frontend development and Express.js with Sequelize for the backend, connecting components using Axios for RESTful API interactions and state management.                     |


### **In Collaboration With**

- **[Justin Kao](https://github.com/PandaKao)**  
  - Contributed to the early setup by adding the PostGIS extension for geometry support to store coordinates in `server/db/schema.sql`.
  - Provided initial models for `server/models/issue.js` and `server/models/user.js` with essential fields and associations, including password hashing for user authentication.
  - Assisted with creating initial seed files, including `server/seeds/index.js` and `server/seeds/user-seeds.js`, for testing data in the database.
  - Helped set up a basic migration for the `users` table (`migrations/20241001203053-create-users.js`).
  - Provided an early version of `client/src/services/authService.ts` to manage JWT-based authentication.

- **[Isaiah Skidmore](https://github.com/IsaiahSkidmore)**  
  - Assisted with selecting the official project logo, providing input on the platform’s visual identity.

- **[Sammy Kordi](https://github.com/thepeoplesengineer)**  
  - Adapted some existing code from the authority reporting feature to the community reporting system, contributing to the overall project structure.

---

## **Version 2.0 Contributions**

### **Overview**  
The development of **Version 2.0** of NeighborhoodAid was completed under the leadership of **Mirasol Davila**, building on the solid foundation established during the early stages of the project. 

While **Justin Kao**, **Isaiah Skidmore**, and **Sammy Kordi** made early contributions during Version 1.0, they have since shifted focus to other commitments. Their efforts provided helpful starting points for the project, and we appreciate their involvement in the initial stages.

All new features, improvements, and refinements in Version 2.0 were **designed, developed, and implemented solely by Mirasol Davila**. This release introduces key enhancements that significantly expand the platform’s functionality and usability, laying the groundwork for future developments.

---

## **Version 2.0 Completed Contributions**

### **Frontend Pages**

- **`client/src/pages/ReportedIssuesPage.tsx`**  
  - Displays all user reports with **filtering options** based on status and type.  
  - Integrates with backend APIs to fetch reports for both **Authority** and **Community** issues.

- **`client/src/pages/CommunityReportPage.tsx`**  
  - Allows users to **submit neighborhood-level issues** with map-based location selection.  
  - Captures and sends **latitude, longitude, and contact details** to the backend.

- **`client/src/pages/ReportDetailPage.tsx`**  
  - Displays the **details of a specific report**, including weather data and status.  
  - Allows users to **edit** and **delete reports** using modals for seamless interaction.

- **`client/src/pages/About.tsx`**  
  - Provides information about **NeighborhoodAid’s mission** and the services it offers.

- **`client/src/pages/Blog.tsx`**  
  - Contains a **blog with community-related posts**, such as ways to report issues and engage youth in service.

- **`client/src/pages/Careers.tsx`**  
  - Lists **career opportunities** and encourages individuals to join the NeighborhoodAid team.

- **`client/src/pages/ConstructionPage.tsx`**  
  - Displays a **“Under Construction”** message for pages still in development.

- **`client/src/pages/OurTeam.tsx`**  
  - Introduces the **project team**, highlighting contributions from developers and other contributors.

---

### **Frontend Components**

- **`client/src/components/DashboardNav.tsx`**  
  - Provides **navigation links** for users, including routes to create reports, manage reports, and log out.  
  - Supports **mobile-friendly menus** with a hamburger icon.
  
- **`client/src/pages/Dashboard.tsx`**  
  - Offers a **task manager** where users can create, edit, delete, and complete tasks.  
  - Displays **weather updates** for the user’s current location on the dashboard.  
  - Includes a **community feed** where users can post, edit, and delete comments to foster engagement.


- **`client/src/components/Footer.tsx`**  
  - Renders the **footer across all pages** to ensure a consistent user experience.

- **`client/src/components/ReportMap.tsx`**  
  - Renders a **map using React Leaflet** to display report locations.  
  - Allows **dragging markers** for location adjustments during report creation or editing.

- **`client/src/components/MapWithAddress.tsx`**  
  - Used on the **Community Report Page** to allow users to select an address with the map.

---

### **Backend Routes and Models**

- **`server/routes/ReportAuthorityRoute.js`**  
  - Handles **CRUD operations** for authority reports.  
  - Integrates with **OpenWeather API** to retrieve weather data for report locations.  
  - Ensures only authenticated users can access or modify reports.

- **`server/routes/communityRoutes.js`**  
  - Manages **community reports**, including creating, updating, and deleting them.  
  - Uses **reverse geocoding** to fetch city names from location coordinates.  
  - Applies **JWT-based authentication** to ensure only logged-in users can submit or modify reports.

---

### **Auth and Services**

- **`client/src/services/authService.js`**  
  - Manages **user authentication** through **JWT tokens**.  
  - Provides methods to **get the token**, check if the user is logged in, and fetch the user profile.

---

### **API Integrations and Middleware**

- **Weather API Integration**  
  - Utilizes the **OpenWeather API** to provide real-time weather updates for report locations.

- **Geolocation Integration**  
  - Uses the **OpenStreetMap API** for map rendering and location tracking in reports.

---

## **Version 2.0 Summary**

The updates in **Version 2.0** have significantly improved the platform by introducing:

1. **Comprehensive Reporting System**  
   - Users can now **create, view, edit, and delete reports** for both community and authority issues.

2. **Interactive Maps**  
   - Location-based reporting is enhanced with **drag-and-drop marker functionality**.

3. **Authentication and Security**  
   - All routes are protected using **JWT authentication**, ensuring secure access.

4. **Weather and Geolocation Features**  
   - Reports display **real-time weather updates** and accurate geolocation data.

5. **UI/UX Enhancements**  
   - New pages, including **Careers**, **Blog**, and **Our Team**, offer an engaging and informative user experience.

---

## **Filtering Functionality**

- Users can **filter their reports** based on the following criteria:

  ### **Report Type**
  - **Authority Reports**: Issues submitted to authorities.  
  - **Community Reports**: Neighborhood-level issues for the community.

  ### **Report Status**
  - **All**: Displays all reports regardless of their status.  
  - **Open**: Reports that are active but not yet addressed.  
  - **In Progress**: Reports currently being worked on or reviewed.  
  - **Resolved**: Issues that have been resolved.  
  - **Reported**: New reports that have been submitted but not yet reviewed.

---

## **Report Actions**

- **View**  
  - Users can click on a report to **view its details** in a separate page.  
  - **Weather details** for the report location are fetched and displayed, including **temperature, humidity, and wind speed**.  
  - The report’s **location is shown on an interactive map** using `ReportMap`.

- **Edit**  
  - Users can **modify the report's content**, including the **title, description**, and **location**.  
  - **Map Editing**:  
    - Users can **drag the map marker** in the edit modal to change the report's location.  
    - The new latitude and longitude are **saved to the database**.  
  - **Authentication Check**:  
    - Ensures that only the report owner can edit the report using **JWT token validation**.  
  - Saved changes are updated in real-time.

- **Delete**  
  - Users can **delete reports** through a **confirmation modal**.  
  - **Authentication Check**:  
    - Deletion is only allowed if the **user’s ID** matches the report owner’s ID.  
  - Once confirmed, the report is **permanently removed** from the database, and the user is redirected to the dashboard.

---

## **Community Report Page (`CommunityReportPage.tsx`)**

1. **Authentication Check**  
   - Redirects users to the homepage if they are not logged in.

2. **User Input Management**  
   - Tracks user input for **issue title, description, email, and phone number**.

3. **Map Integration**  
   - Users select the **location of the issue** on an interactive map.  
   - Captures **latitude, longitude, address, and city**.

4. **Submitting the Report**  
   - Uses **JWT tokens** to authenticate users and submit reports.  
   - Redirects users to their **reported issues dashboard** upon success.

---

## **Tracking and Interaction**

- **Tracking Mechanism**  
  - Tracks the status and progress of reports in real-time.

- **Filtering by Status and Type**  
  - Users can filter reports by **Authority or Community Reports** and status:  
    - **All**, **Open**, **In Progress**, **Resolved**, **Reported**.

---

### **Notes**  
NeighborhoodAid has evolved with **Version 2.0**, delivering enhanced reporting systems, interactive maps, and seamless user authentication. 

As **Version 3.0** begins, the focus will shift toward new integrations, such as the **Spotify API**, allowing users to share music and create collaborative playlists. Under **Mirasol Davila’s leadership**, the project will continue to expand, ensuring NeighborhoodAid becomes a vibrant and connected tool for communities.

**Reflection**: The rapid progress in Version 2.0 highlights the dedication and collaborative spirit of the project. With these enhancements, NeighborhoodAid is well-positioned to grow further, making meaningful contributions to community life.


## License

This project is licensed under the MIT license.

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-green.svg) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=white&style=flat-square)]
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white&style=flat-square)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.x-52B0E7?logo=sequelize&logoColor=white&style=flat-square)](https://sequelize.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.x-336791?logo=postgresql&logoColor=white&style=flat-square)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-2.x-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![RESTful API](https://img.shields.io/badge/API-RESTful-FF6F00?style=flat-square)](https://restfulapi.net/)
[![Axios](https://img.shields.io/badge/Axios-0.21.1-5A29E4?logo=axios&logoColor=white&style=flat-square)](https://axios-http.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.x-199900?logo=leaflet&logoColor=white&style=flat-square)](https://leafletjs.com/)
[![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=flat-square)](https://openweathermap.org/)
[![Nominatim](https://img.shields.io/badge/Nominatim-API-blue?style=flat-square)](https://nominatim.org/)
[![Spotify API](https://img.shields.io/badge/Spotify-API-1DB954?logo=spotify&logoColor=white&style=flat-square)](https://developer.spotify.com/)
![GitHub issues](https://img.shields.io/github/issues/mirasoldavila13/NeighborhoodAid)
![GitHub closed issues](https://img.shields.io/github/issues-closed/mirasoldavila13/NeighborhoodAid)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mirasoldavila13/NeighborhoodAid)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/mirasoldavila13/NeighborhoodAid)
![GitHub stars](https://img.shields.io/github/stars/mirasoldavila13/NeighborhoodAid?style=social)
![GitHub forks](https://img.shields.io/github/forks/mirasoldavila13/NeighborhoodAid?style=social)
![LOC](https://img.shields.io/tokei/lines/github/mirasoldavila13/NeighborhoodAid)
![GitHub last commit](https://img.shields.io/github/last-commit/mirasoldavila13/NeighborhoodAid)
![GitHub contributors](https://img.shields.io/github/contributors/mirasoldavila13/NeighborhoodAid)


## Features

- **Dynamic Issue Reporting**: Users can report and track the status of community issues.
- **Interactive Maps**: Integration with OpenStreetMap and Nominatim API for precise geolocation and visualization.
- **Weather Updates**: Real-time weather information for reported locations using OpenWeather API.
- **Community Engagement**: Comment system and community playlist powered by Spotify API.
- **AI Sentiment Analysis**: Analyzes user sentiment in discussions and offers personalized recommendations using OpenAI.

## How to Contribute

Contributions are welcome! To contribute to NeighborhoodAid, follow these steps:

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page to create a copy of this repository under your GitHub account.
2. **Clone Your Fork**: Use `git clone` to download the forked repository to your local machine.
3. **Create a Branch**: Create a new branch for your feature or fix using `git checkout -b branch-name`.
4. **Make Your Changes**: Implement your changes or additions to the project.
5. **Commit Your Changes**: Use `git commit -m "Description of changes"` to commit your changes.
6. **Push to Your Fork**: Use `git push origin branch-name` to push your changes to your forked repository.
7. **Create a Pull Request**: Navigate to the original repository and click the 'New Pull Request' button. Provide a detailed description of your changes in the pull request.

## Tests

To test the NeighborhoodAid platform, follow these steps:

- **Manual Testing**: Run the application (`npm run start`) and test features such as issue reporting, commenting, and map visualization.
- **Review the Output**: Verify the issue statuses, user interactions, and API integrations for accuracy and responsiveness.

## Future Implementations

# **Spotify API Integration**

- **Music Sharing within the Community**:
  - Users can share songs or playlists with the NeighborhoodAid community.
  - A collaborative playlist will reflect the community’s preferences.

# **AI-Based Sentiment Analysis**

- **Analyze comments and discussions**:
  - The system detects sentiment (positive, neutral, or negative) to provide personalized suggestions.


## Questions

If you have any questions about the project, you can contact me via my GitHub profile at [mirasoldavila13](https://github.com/mirasoldavila13) 
## Walkthrough Video

## **Check Out the Project on Render**

The live version of **NeighborhoodAid** is hosted on Render. Click the link below to explore the platform and experience all the features implemented in **Version 2.0**:  

[NeighborhoodAid on Render](#)  

Feel free to create reports, explore the interactive map, and browse the community features. Your feedback is always welcome as we continue to enhance the platform in future versions.

## NeighborhoodAid in Action
