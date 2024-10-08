# NeighborhoodAid

## License
MIT License

## Description

NeighborhoodAid is a **RESTful API** and **React-based** platform designed to empower citizens to report local issues such as potholes, streetlight outages, or vandalism. Users can track the progress of their reports, receive updates when the issues are resolved, and engage with others in the community. 

### Motivation
We were motivated to create this project to provide a practical and comprehensive solution for civic engagement and local issue resolution. Our goal was to streamline the process of reporting, tracking, and managing community issues while fostering community interaction and collaboration. 

### What We Learned
Through the development of NeighborhoodAid, our team learned how to effectively build a full-stack application using:
- **Node.js and Express** for developing a RESTful API.
- **React** for creating a dynamic and responsive user interface.
- **PostgreSQL** and **Sequelize ORM** for managing database interactions.
- API integrations for mapping, weather, and user interaction features.
  
We also gained experience in user authentication with **JWT** and implemented best practices for secure, efficient, and scalable application development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Walkthrough Video](#walkthrough-video)

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

## Credits

This project was developed by **Mirasol Davila** in collaboration with:

### Collaborators

- **[Justin Kao](https://github.com/PandaKao)**: 
  - Added the PostGIS extension for geometry support for storing longitude and latitude coordinates in `server/db/schema.sql`.
  
- **Database Models**:
  - Created `server/models/issue.js` to define the Issue model with fields such as `id`, `description`, `location`, `status`, and `assignedUserId`.
  - Created `server/models/user.js` to define the User model, including password hashing functionality before saving the user in the database.
  
- **Database Seeding**:
  - Developed `server/seeds/index.js` to handle database seeding with users and issues data.
  - Developed `server/seeds/user-seeds.js` to seed user data into the database using the User model.
  
- **Database Migration**:
  - Created migration file `migrations/20241001203053-create-users.js` to set up the issues table schema with necessary fields and constraints.
  
- **Authentication Service**:
  - Developed `client/src/services/authService.ts` to handle JWT-based authentication, including token retrieval, expiration checking, and profile decoding.
  
- **User Registration Page**:
  - Updated `client/src/pages/UserRegistration.tsx` to store the JWT token in localStorage upon successful user registration.
- 14 Merge Pull Request    
- **[Sammy Kordi](https://github.com/thepeoplesengineer)**:
- **Community Report Page**:
  - Developed `client/src/pages/CommunityReportPage.tsx` to display the community report page where users can view and submit reports.
  
- **Database Model for Community Reports**:
  - Created `server/models/reportCommunity.js` to define the model for community reports, including fields for title, description, location (stored as JSON), and other relevant information.
- 1 Merge Pull Request 

- **[Isaiah Skidmore](https://github.com/IsaiahSkidmore)**:
  - Assisted in selecting the logo for the project.
- 1 Merge Pull Request       
- **[Diarmuid Murphy](https://github.com/dev-dermo)**:
  - Provided the starter code for the project structure and set up the API architecture.

- **[Mirasol Davila](https://github.com/mirasoldavila13)**:
  -  Created Github Issue Template located at `.github/ISSUE_TEMPLATE/user-story.md`. This template ensures that all team members follow a consistent format when creating user stories and issues.
  -  Created and structured all 16 GitHub issues using a standardized issue template to ensure consistency and clarity throughout the development process. These issues cover various aspects of the platform, including frontend, backend, and API integration tasks.
  -  Created the official logo for the Neighborhood Aid platform, ensuring that it visually aligns with the platform's mission of community engagement and support. The logo was designed to be both modern and friendly, appealing to a diverse audience while conveying a sense of trust and reliability.

    **Key Features:**

    1. **Concept Development:**  
       Developed multiple logo concepts based on the platform's goals, emphasizing elements of community, support, and local engagement. Conducted a review process to select the most impactful design.

    2. **Tool Utilization:**  
       Used vector graphic tools like Adobe Illustrator to create a scalable, high-quality logo suitable for various formats, including web and print.

    3. **Accessibility and Versatility:**  
       Ensured that the logo is accessible and versatile by designing variations for different backgrounds (light, dark, and transparent versions). The logo is optimized for responsiveness, maintaining clarity and readability across device types and screen sizes.

    4. **Color and Font Selection:**  
       Chose a color palette that reflects warmth and inclusivity while remaining visually distinct. Paired these with modern, sans-serif fonts to create a clean and professional look that complements the platform’s overall aesthetic.

    5. Overall Contribution:**  
      The Neighborhood Aid logo serves as a foundational element of the platform's branding, symbolizing its commitment to building strong, connected communities. Demonstrated expertise in graphic design, brand development, and visual communication.

  - LandingPage.tsx Component Contribution

      **Overview**:
     - Developed the LandingPage component as the main entry point for the Neighborhood Aid platform.
     - Integrated several child components (e.g., Nav, Hero, Features, FAQ, Testimonials, Newsletter, Footer) to construct a cohesive and engaging landing page.
     - Used React and TypeScript for structured development, ensuring that the codebase remains modular and maintainable.
     - Applied Tailwind CSS throughout the child components for consistent styling and responsiveness.

      **Key Features Component Integration**:
      - Integrated the following components to build a comprehensive and functional landing page:
      - `Nav`: A responsive navigation bar for easy access to different sections.
      - `Hero`: The hero section, which provides a strong visual and textual introduction to the platform.
      - `Features`: A section highlighting the key features of Neighborhood Aid, encouraging user engagement.
      - `FAQ`: An accordion-style FAQ component that answers common user queries.
      - `Testimonials`: A section showcasing user testimonials to build trust and credibility.
      - `Newsletter`: A signup section where users can subscribe for updates.
      - `Footer`: The site’s footer, providing links to features, resources, company information, and social media icons.
     **Modular Structure**:
      - Ensured that the landing page is modular by importing and using each component separately:
      - This approach promotes reusability, making it easier to manage updates or changes to specific sections without affecting the overall structure.
      - Components like `Nav`, `Hero`, and `Footer` can also be reused in other pages, maintaining consistency across the platform.
      **Responsive Design**:
      - Each child component is designed using Tailwind CSS utilities for responsiveness and consistency across different screen sizes.
      - The structure ensures that the landing page scales well, maintaining visual balance and accessibility on mobile, tablet, and desktop devices.
      **Accessibility Considerations**:
      - Ensured that components like `Nav`, `FAQ`, and `Footer` are structured with semantic HTML for accessibility.
      - For example, the navigation bar is set up to be accessible via keyboard navigation, supporting screen readers and other assistive technologies.
      - The use of `alt` attributes for images in components like `Hero` and `Footer` also enhances accessibility.
      **Best Practices**:
      - Utilized React Fragments (`<>...</>`) to wrap the component structure, avoiding unnecessary HTML tags and maintaining a clean DOM structure.
      - Followed a clear and consistent file organization and naming convention (e.g., `Nav.tsx`, `Hero.tsx`), making the code easy to read and maintain.
      - Leveraged the React component lifecycle to load all critical components at once, ensuring smooth and efficient page rendering.

      **Overall Contribution**:
      - The LandingPage serves as the cornerstone of the platform’s user interface, integrating multiple components to deliver a unified and engaging user experience.
      - Demonstrated expertise in full-page layout structuring, component integration, and modular development using React and TypeScript.
      - Leveraged Tailwind CSS to achieve a fully responsive and visually appealing design, aligning with the platform’s aesthetic standards.

  - Nav.tsx Component Contribution

      **Overview**:
      - Designed and developed the Nav component for the Neighborhood Aid platform using React and Tailwind CSS.
      - This component serves as the main navigation bar, ensuring consistency and responsiveness across desktop and mobile views, offering users an intuitive and accessible way to navigate the platform.

      **Key Features**:
      **Dynamic Menu State Management**:
      - Utilized the `useState` hook to manage the `menuOpen` state, controlling the visibility of the mobile menu.
      - Implemented a `toggleMenu` function to switch the state when users interact with the hamburger icon, allowing for a seamless mobile menu experience.
      **Responsive Design**:
        - Designed the component to be responsive:
        - On desktop: The menu displays links horizontally, aligned in a visually appealing and organized manner.
        - On mobile: A hamburger menu is displayed. When clicked, the menu opens and displays the navigation links in a vertical layout for easy interaction.
      - Integrated Tailwind CSS classes (`lg:flex`, `lg:hidden`) to differentiate styling based on screen size, ensuring responsiveness.
      **Navigation Links**:
        - Configured React Router `Link` components for seamless navigation between pages:
          - Links include:
          - Features
          - Pricing
          - Testimonials
          - Login
          - Sign Up
       - Links are styled with Tailwind classes, including hover effects to enhance user interaction and maintain the platform’s visual identity.
        
       **Desktop and Mobile Behavior**:
       - Desktop:
          - The navigation bar includes a logo on the left and menu items (Features, Pricing, Testimonials) aligned horizontally with the login and signup buttons on the right.
          - Styled the buttons (Login and Sign Up) to stand out, with the signup button featuring a distinct background color (`purpleLight`) for emphasis.
       - Mobile:
          - When the screen size is small, the navigation changes to display a hamburger icon for the menu.
          - Clicking the hamburger icon toggles the visibility of the mobile menu, which slides out and displays the menu items vertically.
       - Mobile Menu Design:
          - When active, the mobile menu overlays the screen with a dark background (`bg-zinc-800`) and displays the navigation links in a vertical, centered layout.
          - Applied hover effects (`hover:text-purpleLight`) to each menu item, ensuring the mobile experience is interactive and user-friendly.
          - Styled the mobile "Login" and "Sign Up" buttons distinctly, maintaining consistency with the desktop design but adapting them for mobile accessibility.
       - Accessibility Enhancements:
          - Ensured accessibility by using semantic HTML elements such as `<nav>` for the navigation bar and `<button>` for the hamburger icon.
          - Incorporated aria roles and meaningful class names to assist screen readers and maintain keyboard accessibility for navigation links.
       - Visual and Interaction Design:
          - Emphasized the hover states for desktop and mobile links, providing feedback to users when they interact with the navigation items.
          - Used consistent Tailwind classes (`text-grayishViolet`, `hover:text-purpleLight`) to align with the platform’s branding, enhancing the overall user experience.
          - The hamburger menu button changes state and displays as "open" when activated, enhancing visual clarity and user engagement.

       - **Overall Contribution**:
          - Comprehensive Component: The Nav component is central to user navigation, providing a responsive and accessible experience for users across devices.
          - Styling Consistency: Maintained consistent styling across the platform using Tailwind CSS classes, ensuring a cohesive look and feel.
          - Performance Optimization: Conditional rendering of the mobile menu (`menuOpen` state) optimizes performance, preventing unnecessary DOM updates.
          - Scalability: Designed with scalability in mind, allowing for additional links or modifications without significant structural changes.

   - Newsletter.tsx Component Contribution

      - **Overview**:
        - Developed the Newsletter component for the Neighborhood Aid platform to encourage user engagement and subscriptions.
        - This section provides a visually appealing call-to-action (CTA) encouraging users to sign up for early access, ensuring the platform's community-building mission reaches a broader audience.

      - **Key Features**:
        - **Call-to-Action Section**:
          - Implemented a section with a clear and compelling message (“Get early access today”) that encourages users to take action.
          - The text emphasizes the ease of signing up and the generosity of the starter tier, which is crucial for driving user subscriptions.
      - **Form Layout**:
        - Designed a responsive form with:
          - An input field for users to enter their email addresses.
          - A button styled as a CTA to submit the form and get started.
          - Ensured accessibility by structuring the form elements semantically and using clear placeholder text ("email@example.com") to guide users.
      - **Responsive Design**:
        - Developed the component to adapt smoothly across devices:
          - On desktop: The email input and button are arranged horizontally for optimal screen use.
          - On mobile: The elements stack vertically, ensuring that the layout remains user-friendly and accessible on smaller screens.
          - Utilized Tailwind CSS classes (`md:flex-row`, `md:space-x-4`, `md:w-48`) to create responsive behavior for the layout based on screen size.
      - **Styling and Tailwind CSS Integration**:
        - Applied Tailwind CSS classes to maintain consistency with the platform’s visual style:
          - Background colors: `bg-gray-800` for the section and `bg-gray-700` for the form, ensuring a modern, dark-themed aesthetic that matches the overall design.
          - Text colors: Used `text-white` for headings and `text-gray-300` for subtext to ensure legibility.
          - Button design: Styled the button with `bg-purpleLight` and `hover:bg-darkViolet` to make it visually distinct and interactive.
          - Input focus effects: Added `focus:ring-2` and `focus:ring-purpleLight` for the email input field to provide visual feedback when users interact with the form.
      - **Shadow and Spacing**:
        - Enhanced visual depth using Tailwind’s `shadow-lg` class for the card container, making it stand out against the background.
        - Utilized padding and margin classes (`p-8`, `md:px-12`, `space-y-4`) to create a well-spaced and balanced layout, making the section visually appealing and easy to read.
      - **Accessibility**:
        - Ensured accessibility by using descriptive text, contrast colors, and appropriate placeholder values to guide users.
        - Implemented button and input field focus styles for keyboard accessibility, making the component usable for all users.
      - **Hover and Transition Effects**:
        - Incorporated hover and transition effects (`hover:bg-darkViolet`, `transition`) on the button to create an interactive experience, providing users with feedback when they interact with the form elements.

      - **Overall Contribution**:
        - **User Engagement**: The Newsletter component serves as a critical CTA for the platform, designed to convert visitors into subscribers with a visually compelling and easy-to-use interface.
        - **Responsive and Accessible**: Developed to be fully responsive and accessible, ensuring that users across different devices and abilities can interact with the section effortlessly.
        - **Styling Consistency**: Maintained consistent styling using Tailwind CSS, ensuring the component aligns with the rest of the platform’s visual identity.
        - **Scalable Design**: Structured the component with flexibility in mind, allowing easy updates or expansions (e.g., adding more input fields or modifying the messaging) without major layout changes.

  - FAQ.tsx Component Contribution

      - **Overview**:
        - Developed an interactive FAQ section using React and TypeScript.
        - Implemented an accordion-style interface for Frequently Asked Questions.
        - Ensured responsiveness and consistent design using Tailwind CSS.

      - **Key Features**:
        - **State Management**:
          - Used `useState` hook to manage the active FAQ item (`activeIndex`).
          - Toggled FAQ items to expand or collapse content upon user interaction.
      - **Accordion Functionality**:
          - Implemented a `toggleFAQ` function to handle the expansion and collapse of FAQ items.
          - Allowed only one FAQ item to be expanded at a time for a clean user experience.
      - **Dynamic Styling with Tailwind CSS**:
          - Used conditional classNames to change text color and rotate icons based on the active state.
          - Styled the component with Tailwind CSS classes for spacing, typography, and layout.
          - Ensured smooth transitions with Tailwind's transition utilities (`transition`, `duration-500`, `ease`).
      - **SVG Icon Integration**:
          - Included an SVG arrow icon that rotates when the FAQ item is expanded or collapsed.
          - Enhanced visual feedback by changing icon orientation and color dynamically.
      - **Responsive Design**:
          - Utilized responsive classes (e.g., `md:text-4xl`) to ensure the FAQ section looks good on various screen sizes.
          - Centered content using utility classes like `text-center` and `mx-auto`.
      - **Accessibility Features**:
          - Added `tabIndex` to make FAQ items focusable via keyboard navigation.
          - Used semantic HTML elements (e.g., `section`, `div`, `p`, `h2`) for better accessibility.

      - **Overall Contribution**:
          - Created a user-friendly FAQ section that enhances the user experience.
          - Demonstrated proficiency in React, TypeScript, and Tailwind CSS.
          - Ensured the component is accessible, responsive, and visually appealing.

  - Features.tsx Component Contribution

      - **Overview**:
        - Developed the Features component using React and TypeScript.
        - Implemented a tab system to showcase different platform features interactively.
        - Used Tailwind CSS for styling and responsiveness to ensure a consistent and user-friendly experience.

      - **Key Features**:
        - **Tab Navigation**:
          - Created a state (`activeTab`) managed by the `useState` hook to keep track of the currently selected tab.
          - Implemented a `handleTabClick` function to switch between tabs, displaying relevant content for each feature dynamically.
          - Each tab has hover effects and conditional styling (using Tailwind classes) to highlight the active tab with a border.
      - **Dynamic Feature Panels**:
        - Developed panels for each feature, such as:
            - **Report Local Issues**: Describes how users can report local problems like potholes or streetlight outages.
            - **Track Progress**: Provides updates on reported issues in real-time.
            - **Check the Weather**: Displays weather updates for users to plan their day.
            - **Create and Share**: Allows users to create and share playlists.
            - **Join the Conversation**: Encourages users to engage in community discussions.
            - Panels are displayed based on the active tab, ensuring the component remains interactive and user-focused.
      - **Visual Assets Integration**:
            - Integrated SVG images for each feature panel (e.g., report, track progress, weather, music, and conversation) to enhance visual representation.
            - Used Tailwind CSS utilities to style and position images within panels for consistency.

      - **Overall Contribution**:
            - Developed an interactive and visually engaging Features component that highlights the platform's capabilities.
            - Demonstrated proficiency in React, TypeScript, and Tailwind CSS.
            - Ensured that the component is accessible, mobile-friendly, and designed to encourage user interaction with platform features.
 
  - Pricing.tsx Component Contribution

      - **Overview:**
        - Developed the Pricing component for Neighborhood Aid, showcasing subscription plans that cater to different user needs and encouraging sign-ups with clear call-to-action (CTA) elements. The component integrates the Nav and Footer components for consistency and navigational ease across the platform.

        -  **Key Features:**

            - **Navigation Integration:**
                - Incorporated the Nav component at the top to maintain consistency with the rest of the platform.
                - Provided users with easy access to other parts of the platform while exploring pricing options.

            - **Pricing Plans:**
                - Designed and implemented a three-tier pricing structure:
                    - **Basic Plan:** Free plan offering core functionalities such as reporting local issues, tracking progress, and checking weather updates.
                    - **Standard Plan:** A paid option at $3.99/month, providing enhanced features like creating and sharing playlists, and joining community conversations.
                    - **Premium Plan:** The highest tier at $8.99/month, offering exclusive benefits such as priority reporting, government engagement, and dedicated support.
                    - Styled each pricing card using Tailwind CSS to create visually appealing and distinct sections for each plan, with consistent padding, margins, and background colors (`bg-slate-700`, `bg-slate-800`).

            - **Sign-Up and Purchase Links:**
                - Added Link components for sign-up and purchase actions within each pricing tier:
                    - **Basic Plan:** Redirects users to the registration page to create an account.
                    - **Standard and Premium Plans:** Provides purchase options, encouraging users to upgrade.
                    - Styled links with hover effects (`hover:bg-violet-800`) to create interactive feedback for users when they engage with the sign-up or purchase buttons.

            - **Plan Details:**
                - Organized each plan’s features in a structured and readable format:
                    - Implemented flex containers (`flex`, `justify-center`) for centering and aligning text, ensuring a uniform appearance.
                    - Used Tailwind CSS classes (`text-sm`, `ml-1`) to style the plan features for clarity and consistency across the platform.

            - **Responsive Design:**
                - Developed the layout to be fully responsive:
                    - **Mobile Devices:** The pricing cards stack vertically for an easy scroll-through experience.
                    - **Desktop Devices:** The cards are displayed horizontally with space between them (`md:flex-row`, `md:space-x-6`) to utilize screen space efficiently.

                - **Call-to-Action (CTA) Section:**
                    - Implemented a dedicated CTA section below the pricing cards to prompt users to register and select a plan.
                    - A bold headline inviting users to join.
                    - A descriptive paragraph outlining the benefits of the platform and the process of getting started.
                    - A prominent button styled with Tailwind CSS (`bg-purpleLight`, `hover:bg-purpleStrong`) that transitions on hover for a dynamic user experience.

                - **Styling with Tailwind CSS:**
                    - Used Tailwind CSS extensively for styling, ensuring consistency with the platform’s design system:
                    - Colors: Applied shades of slate and violet (`bg-slate-700`, `bg-slate-800`, `bg-purpleLight`) to match the platform's dark and modern aesthetic.
                    - Typography: Styled headings and text (`text-4xl`, `font-bold`, `text-white`) for readability and emphasis on important elements.
                    - Buttons: Added interactive effects such as border changes and background transitions (`hover:border-violet-800`) to enhance the visual feedback during user interactions.

      - **Footer Integration:**
        - Incorporated the Footer component at the bottom of the page for consistency and ease of navigation to other sections of the platform.

      - **Accessibility Considerations:**
        - Ensured button elements and links are keyboard accessible, providing visual feedback on hover and focus states.
        - Maintained text contrast ratios and clear font sizes for readability, aligning with accessibility standards.

      **Overall Contribution:**
        - **User Engagement:** The Pricing component is designed to clearly communicate the platform’s value proposition, encouraging users to engage and subscribe.
        - **Responsive and Scalable:** Developed with responsiveness in mind to provide a consistent user experience across devices and screen sizes.
        - **Consistent Design:** Styled with Tailwind CSS to maintain visual harmony with other platform components, ensuring the page integrates seamlessly within the overall user experience.
        - **Flexibility for Updates:** Structured in a way that makes it easy to add, modify, or remove pricing plans or features without major layout changes.

  - Testimonials.tsx Component Contribution

      **Overview:**  
        - Developed the Testimonials component for Neighborhood Aid to showcase user feedback and build credibility for the platform. Designed with a responsive grid layout to accommodate multiple testimonials, ensuring the section looks consistent and appealing across various screen sizes.

      **Key Features:**
        - **Heading and Section Layout:**
        - Created a visually appealing section heading styled with bold typography (`text-3xl`, `font-bold`) and a soft gray color (`text-gray-300`) to stand out against the background.
        - Wrapped the section in a `bg-gray-800` container with padding (`py-12`) to maintain consistency with the platform’s dark-themed aesthetic.

    - **Responsive Grid Layout:**
      - Utilized a responsive grid system (`grid-cols-1 md:grid-cols-3`) to ensure the testimonials are displayed in a single column on mobile devices and in three columns on larger screens (desktop).
      - Applied a gap (`gap-6`) between testimonials to enhance readability and visual spacing, creating a clean and organized appearance.

    - **Testimonial Cards:**
      - Each testimonial is contained within a card (`bg-gray-700`, `p-4`, `rounded-lg`, `shadow-md`) that matches the platform's theme while adding depth with shadows for a three-dimensional look.

    - **Text Styling:**
      - User testimonials are displayed in an italicized and smaller font (`italic`, `text-sm`) with a gray tint (`text-gray-400`) to differentiate them from other elements.
      - User names are highlighted with a bold and brighter gray (`text-gray-200`, `font-semibold`), ensuring they stand out.

    - **Responsive Design:**
      - On mobile devices, the testimonials stack vertically for easy readability and scrolling.
      - On larger screens, testimonials are displayed side by side for a balanced and engaging presentation.

    **Overall Contribution:**
      - **User Engagement:** The Testimonials component provides social proof, building trust and demonstrating the platform’s value through real user experiences.
      - **Responsive and Accessible:** Ensured the section is fully responsive and accessible, adjusting seamlessly across various devices and screen sizes.
      - **Consistent Design:** Maintained visual harmony with the platform’s overall aesthetic using Tailwind CSS for consistent and scalable styling.
      - **Clear Structure:** Developed the layout in a way that makes it easy to add, modify, or remove testimonials, providing flexibility for future updates.

 -  MapWithAddress.tsx Component Contribution

    #### Overview
      Developed the `MapWithAddress` component using **React**, **TypeScript**, and **React Leaflet** to provide users with an interactive map for selecting locations. Integrated multiple APIs—**OpenStreetMap API**, **Nominatim API**, and **OpenWeather Geolocation API**—to ensure robust geolocation capabilities. Designed the component for seamless integration into the platform's reporting features, allowing users to pinpoint locations directly on the map.

    #### Key Features

      - **Custom Marker Icon**  
       Created a custom marker icon using Leaflet for consistent visual styling aligned with the platform’s branding. Utilized custom icon files (`marker-icon.png` and `marker-shadow.png`) to enhance the map’s aesthetics and provide a user-friendly experience.

      - **API Integration**  
      - **OpenStreetMap API and React Leaflet**  
        - Used OpenStreetMap tiles within the `MapContainer` and `TileLayer` components from **React Leaflet** to render the map. Leveraged React Leaflet's hooks (`useMapEvents`) to handle user interactions with the map.
      - **Nominatim API (OpenStreetMap)**  
        - Integrated Nominatim API for reverse geocoding to convert latitude and longitude into human-readable addresses. Implemented `fetchLocationDetails` function to retrieve detailed location information based on user-selected coordinates.
      - **OpenWeather Geolocation API**  
        - Used OpenWeather Geolocation API as a fallback to obtain city names when Nominatim data was insufficient. Ensured that users always receive accurate location information by combining data from multiple sources.
      - **Axios for HTTP Requests**  
        -  Managed API requests and responses efficiently using Axios, handling asynchronous operations and error management.

       - **Dynamic Location Updates**  
        Implemented the `LocationMarker` component using `useMapEvents` from React Leaflet to capture user clicks on the map and update the marker position dynamically. Maintained state using `useState` for the selected position (`position`) and error handling (`error`). Passed updated latitude, longitude, and address details back to the parent component via the `onLocationChange` prop, enabling seamless interaction with other components.

      - **Interactive Map Implementation**  
        - Configured the `MapContainer` with initial settings:
          - Default center on Los Angeles coordinates `[34.0522, -118.2437]`.
          - Default zoom level of `13` for an optimal balance between detail and coverage.
          - Enabled users to interact with the map to select any location dynamically, enhancing the reporting feature's usability.

      - **Fallback Mechanism for Location Data**  
          If Nominatim fails to provide the city name, the component uses the OpenWeather Geolocation API to fetch and display city names based on latitude and longitude. This ensures reliable location information even when one API lacks specific data.

      - **Error Handling**  
          Incorporated error handling within the `fetchLocationDetails` function to manage API errors gracefully. Displayed clear error messages to inform users when location retrieval fails, enhancing the user experience.

      - **Styling and Responsiveness**  
          Styled the map component using Tailwind CSS classes for height (`h-[300px]`) and width (`w-full`), ensuring full responsiveness across devices and screen sizes. Applied consistent styling to the error messages to maintain visual harmony throughout the platform.

      - **Props Definition**  
          Defined the `MapWithAddressProps` interface for strong type-checking and better code documentation:
      - `onLocationChange`: Function prop that receives latitude, longitude, and address details, enabling communication between the map component and its parent.

      #### Overall Contribution
      - **Full Integration**  
        The `MapWithAddress` component integrates seamlessly with other features, particularly in report submission and location-based services.
      - **APIs and Geolocation Expertise**  
        Demonstrated proficiency in using multiple geolocation APIs and managing asynchronous requests with Axios.
    - **Interactivity and Usability**  
        Enhanced user experience by allowing direct interaction with the map for intuitive location selection.
    - **Reusable Component**  
        Designed to be reusable and adaptable across different parts of the platform, supporting modular development practices.

 -  Modal.tsx Component Contribution

      #### Overview
        Developed a reusable `Modal` component using **TypeScript** and **React** to display dynamic messages across the application. Designed the component to be flexible, supporting different types (`"success"` and `"error"`) and providing a consistent user interface for feedback and notifications.

       #### Key Features

   - **Typed Props with TypeScript**  
      Implemented the `ModalProps` interface to define the structure of the props:
        - `isOpen`: Controls the visibility of the modal.
        - `onClose`: Callback function for handling the modal close event.
        - `message`: The message content displayed within the modal.
        - `type`: Specifies the modal type (`"success"` or `"error"`) to differentiate styling and behavior.

   - **Dynamic Rendering**  
    Configured the modal to render conditionally based on the `isOpen` prop, preventing unnecessary rendering for performance optimization.

  - **Styling and Class-Based Design**  
      Utilized dynamic class names based on the `type` prop:
        - `modal-success` for success messages.
        - `modal-error` for error messages.
        - Applied Tailwind CSS classes and custom classes (`modal`, `modal-overlay`, `modal-content`) for consistent styling aligned with the platform's design language.

  - **Overlay Implementation**  
      Developed a `modal-overlay` to darken the background when the modal is open, enhancing focus on the modal content.

  - **Close Button Functionality**  
      Implemented a close button within the modal that triggers the `onClose` function, allowing users to dismiss the modal manually.

  - **Reusability and Flexibility**  
      Designed the component to be reusable across various application modules (e.g., login, registration, reporting). Ensured type safety and code consistency through TypeScript, simplifying integration.

    #### Overall Contribution
    - **Versatile Component**  
        Adaptable for various use cases, including notifications, alerts, and confirmations.
    - **UI Consistency**  
        Maintained a consistent design language across the application using structured class-based styling with Tailwind CSS.
    - **Performance Optimizations**  
        Implemented conditional rendering and state management to reduce unnecessary DOM updates.
    - **Type Safety and Documentation**  
        Leveraged TypeScript for type safety and improved code documentation.


 -  Weather.tsx Component Contribution

    #### Overview
    Developed the `Weather` component to provide users with real-time weather information based on their location. Integrated multiple APIs, including **browser-based Geolocation**, **OpenWeather Geolocation API**, and **OpenWeather Weather API**, to ensure accurate and responsive weather updates.

    #### Key Features

    - **Weather Data Retrieval**  
        Utilized Axios to make API calls to the backend endpoint (`/api/weather`). Defined the `WeatherData` interface to structure the data, including properties like temperature, humidity, weather condition, wind speed, and city name.

    - **Geolocation Integration**  
        Implemented a two-layer geolocation approach:
    - **Browser Geolocation**  
        Used the browser's Geolocation API (`navigator.geolocation.getCurrentPosition`) as the primary method to get the user's latitude and longitude.
    - **Fallback Geolocation via IP**  
        If browser permission is denied or unsupported, used IP-based geolocation via `ipapi.co` to determine the user's location.

    - **API Integration**  
      - **OpenWeather Geolocation API**  
        Used to convert coordinates into city names when necessary.
      - **OpenWeather Weather API**  
        Fetched real-time weather data based on the user's coordinates. Displayed weather icons from OpenWeather for visual representation.

      - **Error Handling**  
         Implemented error messages for API request failures or geolocation permission denials, ensuring users are informed of issues.

      - **Responsive and Dynamic Display**  
        Styled the component using Tailwind CSS for a clean and responsive weather widget. Dynamically rendered weather information upon data retrieval.

      - **Component Lifecycle Management**  
        Leveraged `useEffect` to manage the component lifecycle. Automatically retrieved the user's location on initial render and used `useState` to manage weather data and error messages.

      #### Overall Contribution
      - **User-Centric Functionality**  
        Enhanced platform utility by providing essential weather updates.
      - **Robust and Resilient**  
        Ensured data availability through multiple geolocation methods.
      - **Consistent Styling**  
        Integrated seamlessly with the platform's visual identity.

      ### Hero.tsx Component Contribution

      #### Overview
      Developed the `Hero` component for the Neighborhood Aid platform using **React** and **TypeScript**. Focused on creating a visually engaging and responsive hero section that highlights the platform's mission. Utilized **Tailwind CSS** for styling, ensuring consistency and adaptability across various screen sizes.

      #### Key Features

      - **Responsive Layout**  
      Structured the hero section using a responsive flex layout (`flex flex-col-reverse lg:flex-row`). On smaller screens, content and image stack vertically. On larger screens, the layout changes to a horizontal row for better visual balance.

      - **Text and Messaging**  
      Included a prominent heading (`h1`) with the message "Building Stronger Communities Together!" with adjusted font sizes for emphasis. Added a descriptive paragraph (`p`) explaining the platform’s purpose.

      - **Image Integration**  
      Imported and integrated an SVG image (`communityImage`) representing the platform's focus on community building. Ensured full responsiveness.

    #### Overall Contribution
    - **Visually Impactful Design**  
      Created a strong visual entry point that aligns with the platform's mission.
    - **Responsive and Accessible**  
      Ensured compatibility across devices and adherence to accessibility standards.


 -  DashboardNav.tsx Component Contribution

    #### Overview
      The `DashboardNav` component is a critical part of the Neighborhood Aid application, providing users with a navigational header specifically for the dashboard area once they are logged in.

    #### Key Features

    - **Navigation Setup**  
      Utilized `Link` and `useNavigate` from `react-router-dom` for internal navigation. Included navigation links for Dashboard Home, Reports, Playlists, and Profile.

    - **User Authentication and Profile Management**  
      Integrated with `authService` to retrieve the user profile (`getProfile()`), enabling personalized routing.

    - **Logout Functionality**  
      Implemented a logout function that clears user data and navigates the user back to the home page.

    - **Logo and Styling**  
      Included the Neighborhood Aid logo as a clickable link back to the dashboard home. Styled with Tailwind CSS for responsive design.

    #### Summary of Features Implemented
    - **Responsive Dashboard Navigation**  
      Styled with Tailwind CSS to adapt to different screen sizes.
    - **Dynamic User Routing**  
      Personalized user experience through dynamic ID paths.
    - **Logout Functionality**  
      Secure and efficient session termination.

 - Dashboard.tsx Page Contribution

    #### Overview
      Developed the `Dashboard` page, providing users with an interactive and real-time community feed where they can post, edit, like, delete, and comment on neighborhood updates. Integrated a dynamic layout using **Tailwind CSS** for consistency with the overall platform design and ensured a responsive user experience. Additionally, included a **Weather Component** that displays real-time weather information based on the user's location.

    #### Key Features

    - **Weather Component Integration**  
      - **Client-Side Browser Geolocation API**:  
          The Weather component attempts to retrieve the user's precise location using the browser's Geolocation API. If the user grants permission, it obtains the latitude and longitude directly from the browser.
      - **Fallback to OpenWeather Geolocation API**:  
          If the browser's geolocation permission is denied or unavailable, the component gracefully falls back to using the **OpenWeather API** to get the user's approximate location based on their IP address.
      - **Fetching and Displaying Weather Data**:  
          Once the coordinates are obtained (either from the browser or via OpenWeather's geolocation), the component uses these coordinates to fetch real-time weather data from the OpenWeather API, including temperature, humidity, wind speed, and weather conditions with descriptive icons. This information is then displayed within the dashboard, providing users with up-to-date weather relevant to their location.

    - **User Authentication and Access Control**  
      Integrated `authService` to verify if a user is logged in. If not authenticated, users are redirected to the homepage (`<Navigate to="/" />`). Utilized `useParams` from React Router to fetch the logged-in user's ID dynamically from the URL, ensuring the feed and actions are specific to the authenticated user.

    - **Fetching and Displaying Community Feed**  
      - Developed the `fetchFeeds` function using `axios` to fetch posts from the backend API (`/api/feed/${userId}`), including user information, post content, and comments.
      - Managed the fetched data using `useState` and stored it in the `feedItems` state variable, ensuring the feed is updated in real-time.
      - Incorporated error handling to display messages if there’s an issue retrieving data from the backend.

    - **Creating and Posting Updates**  
      - Developed the `createFeed` function to allow users to submit new posts using `axios.post`. This automatically adds the new post to the beginning of the `feedItems` list for instant visibility.
      - Implemented a form with a `textarea` for user input, styled for consistency with the platform’s design.

    - **Liking Posts**  
      - Built the `likeFeed` function, enabling users to like posts. It sends a POST request to update the like count and modifies the local state (`feedItems`) to reflect the updated likes immediately.

    - **Editing and Deleting Posts**  
      - Designed the `updateFeed` and `deleteFeed` functions. For editing, users can update post content via an inline form, which appears when the "Edit" button is clicked. For deleting, a button removes the post from both the backend and local state. Conditional rendering ensures these options appear only for posts made by the logged-in user.

    - **Commenting on Posts**  
      - Implemented the `commentOnFeed` function, allowing users to add comments on posts via a form. Comments are immediately appended to the respective feed item upon successful submission.

    - **State Management and Dynamic Rendering**  
      Utilized `useState` and `useEffect` for various states (`feedItems`, `newFeedContent`, `error`, etc.), ensuring a responsive user experience. Applied conditional rendering to display appropriate forms and error messages based on user actions.

    - **Styling and Layout**  
      Styled the dashboard with **Tailwind CSS**, ensuring the feed items are visually distinct using borders, shadows, and padding (`p-4 border rounded shadow`). Aligned elements like the weather widget, feed list, and forms to be responsive using utility classes (`flex`, `space-x-4`).

      #### Overall Contribution
        - **Interactive and Real-Time**: The Dashboard page allows users to post updates, like, comment, and interact in real time.
        - **Weather Component Integration**: Displays real-time weather based on user location using both the browser's and OpenWeather APIs.
        - **User-Specific Features**: Ensures that functionalities are secure and user-specific.
        - **Consistent Styling**: Tailored to match the platform’s aesthetic.
        - **Extensible Architecture**: Designed for future updates or API integrations.


  - Features.tsx Page Contribution

      #### Overview
    Developed the `Features` page, showcasing the platform’s key functionalities in a visually appealing and interactive layout. Integrated dynamic design using **Tailwind CSS** to create a user-friendly experience and utilized responsive design practices to ensure compatibility across devices.

      #### Key Features

      - **Navigation Integration**  
        Included the Nav component for easy access to other sections of the platform.

      - **Features Display**  
        Structured the features into five interactive cards, each representing a key platform feature:
      - **Report Local Issues**: Allows users to report community issues such as potholes and streetlight outages.
      - **Track Progress**: Highlights real-time status updates for user reports.
      - **Check the Weather**: Integrates the Weather Component to provide real-time weather information, using both browser and OpenWeather APIs.
      - **Create and Share**: Enables users to share music tracks and playlists, promoting community engagement.
      - **Join the Conversation**: Fosters community collaboration and interaction through discussions.

      - **Dynamic Card Design**  
        - Utilized custom icons (e.g., `report_icon.svg`, `progress_icon.svg`) for each feature.
        - Applied hover and transition effects using Tailwind CSS (`hover:bg-purpleLight`, `transition-all duration-500`).

      - **Responsive Layout**  
        - Designed the grid using CSS grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) for dynamic and adaptive display.
        - Ensured content stacks vertically on smaller devices and transitions to a multi-column layout on larger screens.

      - **Hero Section**  
          Developed a section at the top featuring an engaging heading and description to promote the platform’s value.

      - **Footer Integration**  
          Added the Footer component for consistency and additional navigation options.

      #### Overall Contribution
     - **Interactive and Informative**: Provides a clear overview of platform capabilities.
     - **Consistent Styling and Responsiveness**: Tailored with Tailwind CSS for consistent visuals and accessibility.
     - **API Integration (Weather Component)**: Highlights the Weather Component’s dynamic location-based weather updates.

 -  Login.tsx Page Contribution

      #### Overview
       Developed the Login page for user authentication, enabling users to log in securely to access platform features such as reporting issues and engaging with the community. Implemented a user-friendly interface with detailed validations and feedback mechanisms to enhance the user experience.

      #### Key Features

      - **Form Validation and Authentication**
          - Integrated form validation to ensure that both the email and password fields are filled before submission.
      - Used `authService` for login functionality:
          - Called the `login` method to handle user authentication.
          - Checked for successful login to navigate users to their personalized dashboard using their user ID fetched from the user profile (`authService.getProfile()`).
          - Displayed appropriate feedback messages for different scenarios (e.g., successful login or errors during login) using a modal component.

      - **Modal Component for Feedback**
          - Designed a modal to display login status messages (e.g., "Login successful!" or "An error occurred during login").
          - The modal is dynamically shown or hidden based on state (`showModal`), and it navigates the user to their dashboard upon successful login.

      - **Social Media Login Options**
          - Added buttons for Facebook and Google login, integrating icons (`facebook.png`, `google.png`) to enhance the visual appeal and provide alternative login methods.
          - Styled these buttons with hover effects (`hover:bg-opacity-30`, `hover:shadow-lg`) using **Tailwind CSS**.

      - **Responsive Design**
         - Structured the login card with responsive styles for different screen sizes:
         - Single-column design for small screens and two-column layout for larger screens (`md:flex-row`).
         - Incorporated a background image for desktop views, enhancing the visual appeal.

      - **Back to Home Button**
        - Included a back button that allows users to navigate back to the home page, styled to align with the platform’s aesthetic.

      - **Accessibility and User Experience**
        - Designed the form with accessible input fields and consistent styling using **Tailwind CSS**, including transitions and hover states for interactive experience.

      - **API and Service Integration**
        - Leveraged `authService` for login logic and fetching user profiles upon successful login.
        - Utilized React Router (`useNavigate`) for navigation to the user’s dashboard once authenticated.

        #### Overall Contribution
        - **Secure and User-Friendly**: Ensured secure login with validations and integrated feedback mechanisms.
        - **Responsive and Interactive Design**: Crafted a professional, responsive, and engaging login page.
        - **Comprehensive Integration**: Integrated login authentication, form validation, and navigation seamlessly.


 -  ReportLocalIssueFeature.tsx Page Contribution

       #### Overview
       Developed the Report Local Issue feature page, enabling users to report community concerns efficiently. Designed the page to highlight the benefits of reporting local issues while providing clear call-to-action (CTA) elements.

       #### Key Features

      - **Navigation and Footer Integration**
        - Included the Nav and Footer components for consistent navigation and branding.

      - **Header Section**
        - Designed a header with the title: "Report Local Issues with NeighborhoodAid".
        - Used **Tailwind CSS** for responsive styling, ensuring visual appeal across all device sizes.

      - **Why Report Local Issues Section**
        - Explained the importance of reporting local issues using bullet points for clarity.
        - Styled with **Tailwind CSS** to center-align content for readability.

      - **Call to Action (CTA) Section**
        - Developed a CTA section with a button directing users to the registration page (`/register`).
        - Styled with hover effects (`hover:bg-purpleStrong`) for interactivity.

      - **Collaborative and Impact Section**
        - Designed three cards to highlight different benefits:
      - **Empower Your Community**: Address small problems before they grow.
        - **Collaborative Solutions**: Join forces with neighbors for larger projects.
        - **Transparency and Accountability**: Track issue resolution in real time.
        - Each card includes icons to enhance engagement.

      - **Styling and Tailwind CSS Implementation**
        - Utilized **Tailwind CSS** for the layout, ensuring responsiveness with grid classes (`grid-cols-1 md:grid-cols-3`).

        #### Overall Contribution
      - **Informative and Engaging**: Clearly communicated the benefits of reporting issues.
        - **Responsive Design**: Ensured full responsiveness across devices.
      - **Interactivity**: Added hover effects for dynamic user experience.


   - ReportOptionsPage.tsx Page Contribution

        #### Overview
        Developed the Report Options Page, allowing users to create and manage reports directed to local authorities or shared within the community. Designed the page to be interactive, offering multiple options for reporting and displaying a feed of submitted reports.

        #### Key Features

        - **User Authentication**
           - Utilized `authService` to verify if the user is logged in, redirecting unauthenticated users to the home page.

        - **Report Options Interface**
          - Implemented a grid layout for two options:
        - **Report to Authorities**: Direct reporting to local authorities.
        - **Report to Community**: Collaborative reporting within the local community.
        - Styled the buttons (`bg-blue-500`, `bg-green-500`) for clear differentiation.

       - **Fetching and Displaying Reports**
          - Created the `fetchReports` function to retrieve reports based on the user's ID.
          - Developed a feed section to display the list of user reports, styled with card layout for visual clarity.

       - **Page Structure and Styling**
          - Utilized **Tailwind CSS** for consistent styling, ensuring the page remains responsive.
          - Integrated DashboardNav and Footer components for consistent navigation.

       - **State Management and Interactivity**
          - Managed states using React's `useState` and utilized `useEffect` for fetching reports.

       - **API Integration**
          - Integrated with the backend reports API to fetch and display user-specific data.

        #### Overall Contribution
        - **User-Centered Design**: Provided clear pathways for reporting local issues.
        - **Dynamic and Interactive**: Real-time data fetching and updates for an engaging experience.
        - **Responsive and Consistent**: Achieved a consistent design using **Tailwind CSS**.


 - Features.tsx Page Contribution

      #### Overview
      Developed the Features page, showcasing platform functionalities in an interactive and visually appealing layout. Ensured responsiveness and maintained a user-friendly experience across devices.

      #### Key Features
      - **Navigation Integration**
      - Included the Nav component for easy access.

      - **Features Display**
          - Structured five interactive cards, each for a platform feature (e.g., Reporting, Tracking, Weather, etc.).
          - Integrated custom icons and applied hover effects (`hover:bg-purpleLight`) for interactivity.

      - **Responsive Layout**
          - Designed using CSS grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) for adaptability.
          - Ensured vertical stacking on smaller devices and multi-column layout on larger screens.

      - **Hero Section**
          - Developed an engaging heading and description.

      - **Footer Integration**
          - Added the Footer component for consistency.

        #### Overall Contribution
        - **Interactive and Informative**: Provides a clear overview of platform capabilities.
        - **Consistent Styling and Responsiveness**: Tailored using **Tailwind CSS** for consistent visuals.
        - **API Integration (Weather Component)**: Displays real-time weather dynamically.

      ### ReportPage.tsx Page Contribution

      #### Overview
      Developed the Report Page for NeighborhoodAid, allowing users to submit detailed reports about local issues directly through the platform. Integrated mapping, weather information, and a form interface to make the reporting process comprehensive and user-friendly.

      #### Key Features

      - **User Authentication**
        - Utilized `authService` to verify user login status (`authService.loggedIn()`).
        - Implemented a redirect using React Router’s `<Navigate>` component for users who are not logged in, ensuring only authenticated users can access the page.

      - **Location Selection and Details**
        - Integrated the `MapWithAddress` component, utilizing the OpenStreetMap API:
        - Users can select locations by clicking on the map, which updates the selected latitude and longitude.
        - The selected location triggers a fetch for address details using Nominatim, displayed on the page (city and full address).

      - **Weather Data Integration**
        - Fetched weather data based on the user’s selected latitude and longitude using the OpenWeather API.
        - The weather data includes temperature, condition, wind speed, and humidity, providing users with local weather information relevant to their report.
        - Added a fallback mechanism if the weather data fetch fails, displaying an error message through the `Modal` component.
        - Highlighted the weather component functionality: if the browser’s geolocation permissions are denied, it falls back to the OpenWeather API for location data.

      - **Report Submission Form**
        - Developed a detailed form where users can input:
        - **Issue Title**: A brief title summarizing the report.
        - **Description**: A detailed explanation of the issue.
        - **Email and Phone Number**: Contact details for follow-up.
        - **Contact Confirmation**: Checkbox to confirm if they have contacted local authorities.
        - Incorporated validation for required fields to ensure complete data entry before submission.
        - Styled the form with **Tailwind CSS** for a clean and user-friendly appearance.

      - **Handling Report Submission**
        - Built the `handleSubmit` function to manage the form submission process:
          - Posts the report data (title, description, email, phone, location) to the backend API (`/api/reportAuthority`).
          - Utilized Axios for API communication, attaching the user’s JWT token in the headers for authentication.
          - Implemented loading state management (`isSubmitting`) to disable the submit button while the report is being processed.
          - Displayed error messages through the `Modal` component if the submission fails, ensuring users are informed of any issues.

      - **State Management**
        - Managed multiple states using React’s `useState` for:
          - **Location Details**: Stores selected location (latitude, longitude, full address, city).
          - **Weather Data**: Holds fetched weather information based on the location.
          - **Error Handling**: Manages error messages for weather data and report submission.
          - **Modal Visibility**: Controls the visibility of the modal to display errors.
          - **Form Submission**: Tracks the submission state to manage button activity.

      - **Styling and Responsiveness**
        - Ensured the page is responsive, adapting seamlessly across different screen sizes using **Tailwind CSS**.
        - Styled various components like the map, form fields, and buttons to create a consistent and interactive user experience.

      - **Modal Component Integration**
        - Utilized the `Modal` component to display error messages dynamically, ensuring that users receive immediate feedback if any issue arises during the weather data fetch or report submission.

      #### Overall Contribution
      - **Comprehensive and Dynamic Reporting Experience**: Built an interface that combines multiple interactive elements, including map integration, weather updates, and a detailed form for efficient issue reporting.
      - **API Integration and Data Fetching**: Implemented seamless API calls for both location and weather data, enhancing the platform's interactivity and providing users with contextual information.
      - **User-Centered Design**: Focused on ensuring ease of use and accessibility, making the report submission process straightforward for users.

 - Testimonials.tsx Page Contribution

      #### Overview
      Developed the Testimonials page to showcase user feedback and community engagement stories. This page highlights the platform’s impact and user satisfaction, providing social proof to new and existing users.

      #### Key Features

      - **Navigation and Structure**
          - Integrated the Nav and Footer components to maintain consistency and navigation flow across the platform.
          - Structured the testimonials in a grid layout using **Tailwind CSS**, ensuring responsiveness across all device sizes (1-column layout for small screens, up to 4 columns for larger screens).

      - **Dynamic Testimonial Display**
      - Implemented a dynamic rendering of testimonials using a mapped array (`testimonials`). Each testimonial includes:
      - **Name**: The name of the user providing the testimonial.
      - **Status**: Indicates the user’s membership status (e.g., "Verified Member").
      - **Text**: A personal message from the user about their experience using Neighborhood Aid.
      - **Background Color**: A unique background color (`bgColor`) assigned to each testimonial card for visual variety and emphasis.

      - **Interactive Design**
          - Added a hover effect on each testimonial card (`hover:scale-105`), creating a subtle transformation when users interact with the cards, enhancing the user experience.
          - Ensured all cards have a consistent style with rounded corners, padding, and text formatting for a clean, modern look.

      - **Call-to-Action (CTA)**
        - Designed a prominent CTA section below the testimonials:
          - Encourages users to join Neighborhood Aid, reinforcing the platform’s benefits and engaging the community.
          - Styled with a background color (`bg-slate-800`), white text, and a hover effect on the signup button (`hover:bg-purpleStrong`).

      - **Styling and Responsiveness**
          - Used **Tailwind CSS** classes for styling, ensuring the page is fully responsive and visually appealing across various devices.
          - The grid layout and padding/margin values adjust dynamically based on screen size for an optimal viewing experience.

      #### Overall Contribution
      - **User-Centric Design**: Showcased real user stories to build credibility and trust with potential users, leveraging the power of social proof.
      - **Dynamic and Responsive Layout**: Implemented a scalable layout that adapts seamlessly across screen sizes, enhancing accessibility and usability.
      - **Visual Engagement**: Utilized hover effects and varied background colors to create an interactive and engaging user interface.


  - UserRegistration.tsx Page Contribution

      #### Overview
      Developed the User Registration page for the platform, enabling new users to create an account and access the platform's features like reporting issues, tracking progress, and engaging with the community.

      #### Key Features

      - **User Input and Validation**
        - Implemented input fields for name, email, password, and password confirmation, ensuring users can enter their information accurately.
      - Added form validation:
        - Validates that all fields are filled before submission.
        - Ensures the email format is correct using a regular expression.
        - Checks if the password meets a minimum length requirement (6 characters).
        - Confirms that the password and confirmation password match before proceeding.

      - **Modal for User Feedback**
        - Developed a modal system to provide feedback on registration status:
        - Displays specific messages based on user input errors (e.g., "All fields are required!", "Passwords do not match").
        - Provides a confirmation message when registration is successful.
        - Includes a modal close functionality that redirects users to their dashboard upon successful registration.

      - **Authentication Integration**
        - Integrated with the platform's authentication service (`authService`):
        - Calls the `authService.register` method to send user data for registration.
        - Stores the JWT token in local storage if registration is successful, ensuring the user is logged in immediately.
        - Redirects the user to their personalized dashboard upon successful registration using the user ID from the authentication profile.

      - **Form and Error Handling**
        - Implemented error handling within the `handleSignup` function to catch and display any errors encountered during the registration process.
        - Displays an error modal with specific messages when registration fails due to issues like server errors or failed validations.

      - **Styling and Responsive Design**
        - Styled the registration form using **Tailwind CSS**, ensuring a clean and professional appearance:
        - Input fields are styled with borders, rounded corners, and padding for a user-friendly interface.
        - The submit button has hover and transition effects to enhance interactivity.
      - Ensured the registration page is fully responsive:
        - Adjusts layout for different screen sizes using responsive classes (`md:w-auto` for desktop, full width for mobile).
        - Includes a background image and design elements that adapt to various screen sizes.

      - **Back to Home Navigation**
        - Added a back button that takes the user back to the home page if they decide not to proceed with registration.
        - Styled the back button with a hover effect and transition for visual consistency.

        #### Overall Contribution
        - **User-Centric Approach**: Focused on building a smooth, intuitive user registration flow, minimizing friction and errors.
        - **Seamless Integration**: Leveraged authentication services to automatically log in users post-registration, enhancing user experience.
        - **Dynamic Feedback**: Developed a modal system to provide real-time feedback, improving user engagement and clarity.

  - authService.ts Contribution

      #### Overview
      Enhanced the `authService.ts` file to include additional functionalities like user registration, login, and integration with Spotify's API. These enhancements make the authentication service more robust and user-friendly.

      #### Key Enhancements and Modifications

      - **User Registration (`register` method):**
        - Added a `register` method that sends a POST request to the `/api/register` endpoint with user data.
      - The method:
        - Stores the JWT token returned from the server using `localStorage`.
        - Returns the registration result for further actions (e.g., navigating to a dashboard).
        - Throws an error if the registration fails, providing a message detailing the issue.

      - **User Login (`login` method):**
        - Implemented a `login` method that authenticates users by sending a POST request to `/api/login` with email and password.
      - On successful login:
        - Stores the JWT token in local storage for session persistence.
        - Returns the token for subsequent usage.
        - If login fails, an error message is displayed, detailing the reason for failure.

      - **Token Management:**
        - Introduced a `setToken` method to centralize how tokens are stored in local storage.
        - Created a `logout` method to clear tokens from local storage, ensuring users are logged out securely.

      - **Token Decoding and Profile Retrieval (`getProfile` method):**
        - Enhanced the `getProfile` method to decode the JWT token and extract user information, such as ID and email, using `jwt-decode`.

      - **Token Expiry Check (`isTokenExpired` method):**
        - Improved the `isTokenExpired` method:
            - Verifies if the token format is valid (checks for three parts separated by dots).
            - Decodes the token to retrieve the expiration timestamp and compares it against the current time to determine if the token has expired.
            - Logs errors clearly if token decoding fails, ensuring easier debugging.

        - **Spotify API Integration:**
            - Added methods to interact with the Spotify API:
            - **`getSpotifyAccessToken`**: Retrieves and manages a Spotify access token using client credentials.
            - Uses Spotify's `/api/token` endpoint and stores the token with an expiration time.
            - Checks for token validity before making requests, ensuring minimal API calls.
            - Handles errors and logs them specifically, distinguishing between Axios errors and other types.
        - **`fetchUserPlaylists`**: Fetches user playlists using the stored Spotify access token.
            - Sends a GET request to Spotify's `/v1/me/playlists` endpoint with the token.
            - Includes error handling to log Axios-specific errors or general issues when fetching playlists.

        - **Error Handling:**
            - Integrated detailed error handling across methods:
        - **Axios errors**: Captures API call issues, logs response data for troubleshooting.
        - **Token errors**: Logs messages when issues arise with token decoding or expiration checks.

        - **Environmental Variables:**
        - Used environmental variables (`process.env.CLIENT_ID` and `process.env.CLIENT_SECRET`) to securely store and access Spotify credentials, ensuring sensitive information is not hardcoded.

        #### Overall Contribution

        - **Comprehensive Authentication System**: Developed a full authentication workflow including registration, login, logout, and session management.
        - **Spotify Integration**: Connected the platform with Spotify APIs, allowing for future features such as playlist sharing and community music engagement.
        - **Robust Error Handling and Logging**: Implemented extensive error management for better monitoring and debugging capabilities.


 - tailwind.config.js Configuration Contribution

      #### Overview
     Customized the Tailwind CSS configuration file to extend the default theme, adding custom colors and fonts to align with the platform's branding and design requirements. This configuration ensures consistency in styling across all components and pages, providing a unified visual identity for the NeighborhoodAid platform.

    #### Key Customizations

    - **Content Paths**:
        - Specified the files Tailwind CSS should scan for class names:
        ```javascript
          content: [
            "./src/**/*.{ts,tsx,js,jsx}",
          ],
        ```
    - This configuration ensures that Tailwind processes all relevant files within the `src` directory, including TypeScript and JavaScript files, to generate the necessary utility classes.

    - **Extended Theme Colors**:
      - Added a custom palette of colors to the default Tailwind theme under the `extend` property.

    - **Purpose of Custom Colors**:
      - **Brand Consistency**: The custom colors reflect the branding guidelines of Neighborhood Aid, ensuring that all UI elements adhere to a consistent color scheme.
      - **Design Flexibility**: Provides a broader palette for designers and developers to create visually engaging components while maintaining a cohesive look and feel.

    - **Examples of Usage**:
      - **Purple Shades** (`purpleLight`, `purpleLighter`, `purpleStrong`): Used extensively in buttons, links, and interactive elements to highlight actions and enhance user engagement.
      - **Neutral Tones** (`lightGray`, `warmGray`, `eggshell`): Applied to backgrounds and text to create a comfortable reading experience and to balance vibrant colors.
      - **Accent Colors** (`teal`, `coral`, `softYellow`, `softOrange`): Utilized sparingly to draw attention to specific elements like notifications, icons, or highlights within the interface.

    - **Custom Font Family**:
      - Extended the default font family with a custom sans-serif font:
        ```javascript
          fontFamily: {
            sans: ["Poppins", "sans-serif"],
          },
        ```

    - **Purpose**:
      - **Typography Consistency**: Ensures that all textual content across the platform uses the "Poppins" font, providing a modern and clean appearance that aligns with the platform's aesthetic.
      - **Readability**: "Poppins" offers excellent readability across various devices and screen sizes, enhancing the user experience.

    - **Plugins**:
      - Currently, no additional plugins are included, providing flexibility for future enhancements:
        - The configuration is prepared to accommodate future Tailwind CSS plugins if additional functionality or custom utilities are required.

      #### Overall Contribution

    - **Unified Styling Framework**:
      - By customizing the Tailwind CSS configuration, a consistent design language is established throughout the NeighborhoodAid platform.
      - Developers can rapidly prototype and implement designs without worrying about inconsistencies, as the custom colors and fonts are readily available via utility classes.

    - **Efficiency in Development**:
      - Reduces the need for custom CSS by leveraging Tailwind's utility-first approach, allowing for faster development cycles and easier maintenance.
      - The extended theme simplifies the application of the platform's branding across all components and pages, streamlining the styling process.

    - **Scalability and Maintainability**:
      - The configuration is designed to be easily extendable, accommodating future design changes or additions without significant refactoring.
      - Centralizes the styling configuration, making it straightforward for new team members to understand and adhere to the established design guidelines.

    - **Responsive Design Facilitation**:
      - Tailwind CSS inherently supports responsive design, and by defining the content paths and custom themes, the platform ensures that all components are responsive and visually consistent across different devices.
   
      Database Development and Migrations

       Database Migrations
        - **Tools**: Utilized Sequelize CLI for creating and managing database migrations.
        - **Essential Tables Developed**:
          - **Users**: Configured user registration, login, and management functionalities with unique constraints on email and secure password hashing.
          - **Issues**: Designed to store community-reported issues with fields for location (using the Geometry type for precision) and status tracking (e.g., "reported", "in progress", "resolved").
          - **Feeds and Comments**: Established data models for community interactions, enabling users to create, like, and comment on posts. Defined relationships between users, feeds, and comments to maintain data integrity.
        - **Migration Handling**:
          - Implemented up and down migrations for each model, ensuring seamless schema management and rollback capabilities.
          - Applied validation rules and default values to align with project requirements and best practices.

         Database Modeling - Sequelize Models
       1. **Comment Model**:
       - Developed to manage user comments on community feeds.
       - Implemented associations:
         - Linked each comment to a specific user using a foreign key (`userId`).
         - Linked each comment to a specific feed using a foreign key (`feedId`).
       - Ensured proper model initialization with Sequelize to maintain data integrity.

      2. **Feed Model**:
       - Enhanced the existing Feed model to define the association with the User model:
       - Implemented a `belongsTo` relationship connecting each feed to a user (`userId`).
       - Defined required attributes (content, `userId`) to enforce data consistency.
       - Collaborated on the User model to ensure the association (`User.hasMany(models.Feed)`) was integrated correctly for querying and managing feeds.

       Controller Implementations

       1. Auth Controller (`authController.js`)
      - **User Registration**:
      - Developed the `registerUser` function to manage new user registrations, incorporating password hashing (using `bcrypt`) and JWT token generation (`jsonwebtoken`).
      - **User Login**:
      - Created the `loginUser` function for authenticating users, verifying credentials, and issuing JWT tokens for session management.
      - **Error Handling**:
      - Added robust error handling for scenarios such as existing users, invalid passwords, and other registration/login issues.

       2. Feed Controller (`feedController.js`)
    - **Feed Management**:
      - **`getAllFeeds`**: Retrieves all feeds, including user and comment details, sorted by creation date.
      - **`createFeed`**: Allows users to create new feed posts, linking content to authenticated users.
      - **`updateFeed`**: Enables authenticated users to update their own feed posts.
      - **`deleteFeed`**: Allows users to delete their feed posts, ensuring only the creator can perform this action.
      - **`likeFeed`**: Implements functionality to like posts, updating the like count in real-time.
      - **`commentOnFeed`**: Developed the ability for users to comment on posts, associating each comment with the appropriate feed and user.

       3. Report Controller (`reportController.js`)
    - **Report Management**:
    - **`createReport`**: Developed a feature for users to create community reports with details like title, description, location, weather data, and contact information. 
    - Integrated error handling for database interaction issues, ensuring reliable functionality.

       API Routes Contributions

       1. Feed Routes (`api/feed.js`)
    - Developed routes for managing community feeds:
      - **GET `/`**: Retrieves all feeds with user details and associated comments.
      - **POST `/`**: Allows authenticated users to create new feed posts.
      - **PUT `/:id`**: Enables users to update their feed posts with authorization checks.
      - **DELETE `/:id`**: Allows users to delete their feed posts if they are the creator.
      - **POST `/:id/like`**: Adds functionality for liking posts.
      - **POST `/:id/comment`**: Enables users to comment on posts, associating the comment with the user and feed.

       2. Report Routes (`ReportAuthorityRoute.js`)
    - Developed routes for reporting issues to authorities:
      - **POST `/`**: Authenticated users can submit reports, including weather and location data using OpenWeather and Nominatim APIs. The route saves report details, such as title, description, weather conditions, and user contact info.
      - Integrated error handling and logging for improved reliability and user feedback.

       3. Authentication Routes (`authRoutes.js`)
    - Implemented routes for user authentication:
      - **POST `/register`**: Handles user registration, calling the `registerUser` controller to create users and return JWT tokens.
      - **POST `/login`**: Manages user login, validating credentials and issuing JWT tokens.

       4. Community Routes (`communityRoutes.js`)
    - Developed routes for reporting community issues:
      - Configured **Multer** for image uploads, ensuring unique filenames and secure storage in the uploads directory.
      - **POST `/api/community-issues`**: Allows users to submit reports about community issues, supporting optional image uploads.
      - Integrated OpenWeather API for weather data, providing context in reports.

       5. Weather Route (`weatherRoute.js`)
    - Created a dedicated route for fetching real-time weather data:
      - **GET `/api/weather`**: Retrieves weather details using the OpenWeather API, requiring latitude and longitude as query parameters.
      - Implemented error handling to manage API failures and missing parameters.

         Database Seeding Contribution

       Seed File for Authority Reports (`issue-authority-seed.js`)
      - Developed a seed script to populate the database with sample data for authority reports, supporting testing and development.
      - **Seed Script Features**:
        - Inserts sample reports into the `ReportAuthority` table using Sequelize’s `bulkCreate`.
        - Includes data fields such as title, description, location (latitude/longitude), weather data (stored as JSON), and contact information.
        - Implements error handling for informative feedback during seeding.
  
      I set up a custom `.sequelizerc` file to define the paths for Sequelize CLI commands, ensuring that the project maintains a consistent and organized structure.

         **Configurations and Paths Defined:**
          - **Config Path (`config`)**: Points to the `config.json` file located in `server/config`. This file manages database configurations for different environments (development, test, and production).
          - **Models Path (`models-path`)**: Directs Sequelize to the `server/models` directory where all model definitions are stored, keeping models organized in a central location.
          - **Seeders Path (`seeders-path`)**: Specifies the `server/seeders` directory for all seed files. This allows for easy database population and testing during development.
          - **Migrations Path (`migrations-path`)**: Points to the `migrations` directory located outside the `server` folder (`../migrations`). This setup keeps migration files in a central location, separate from models and seeders.

              **Purpose:**
              - Organizes the project structure by logically separating configurations, models, seeders, and migrations, making it easier for developers to navigate and manage database-related files.
               - Ensures compatibility with Sequelize CLI commands (`db:migrate`, `db:seed`), enabling smooth database migrations, model generation, and seeding processes.


          - Server Configuration Contribution

            - Enhancements and Modifications to `server.js`

            Several modifications were made to the original `server.js` file to enhance its functionality and improve the server’s configuration:

             1. Environment Variables Setup:
                - **dotenv**: Integrated `dotenv` for secure management of environment variables.
                  ```javascript import "dotenv/config";```
                -This setup allows sensitive information (e.g., database credentials, API keys) to be stored securely and accessed through process.env.

             2. Middleware Additions:

                - ***Introduced new middleware to enhance server functionality and request handling:

                  - CORS Middleware (corsMiddleware):
                  - Configured to manage cross-origin requests, allowing the frontend client to communicate with the server securely.
                  - Logger Middleware (loggerMiddleware):
                  - Logs incoming requests for monitoring and debugging purposes, providing valuable insights during development.

             3. Organized Routes:

                - ***Structured API routes into distinct categories for clarity and maintainability:

                - Auth Routes (/api): Manages user registration, login, and authentication processes.

                - Feed Routes (/api/feed): Handles community feeds, enabling creation, updates, deletion, likes, and comments.

                - Report Routes (/api/reportAuthority and /api/report): Manages report submissions for community issues and authorities.

                - Weather Routes (/api/weather): Retrieves weather data based on user geolocation.

                - Example route setup:
                  `app.use("/api/feed", feedRoutes);
                   app.use("/api/report", reportRoutes);
                   app.use(weatherRoutes);`
             4. Test Route Implementation:

                 - ***Added a test route (/api/test) to check basic server functionality:
                  ` app.get("/api/test", (req, res) => {
                      res.json({ message: "Hello from the server!" });
                  });`
                 - This provides a quick way to verify if the server is running and responding correctly.

              5. Production Setup:

                  -  ***Configured the server to serve the client-side application when in production mode:
                   ` if (process.env.NODE_ENV === "production") {
                       app.get("*", (req, res) => {
                         res.sendFile(path.join(__dirname, "../client/dist/index.html"));
                       });
                     }`

                  - This ensures that all routes serve the frontend’s index.html file, allowing the React application to handle routing in production.

              6. Database Synchronization and Seeding:

                 - ***Updated the database sync configuration to use { alter: true }, allowing non-destructive updates to the database schema:
                   `await sequelize.sync({ alter: true });`
              7. Database Seeding:

                  - ***Added logic for database seeding using seed files (commented out by default). This feature initializes the database with sample data for testing and development.
              8. Error Handling for Database Sync:

                  - ***Enhanced error handling to log any issues during the database synchronization process, providing clear feedback for debugging.

                - ***Purpose:

                 - The modifications to server.js ensure that the backend server is secure, organized, and efficient in handling client requests, managing user authentication, and interacting with third-party APIs (e.g., OpenWeather).
                 - The configuration supports development and production environments, enabling seamless transitions and consistent functionality across different stages of deployment.
---
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

- **Manual Testing**: Run the application (`npm start`) and test features such as issue reporting, commenting, and map visualization.
- **Review the Output**: Verify the issue statuses, user interactions, and API integrations for accuracy and responsiveness.

## Questions

If you have any questions about the project, you can contact me via my GitHub profile at [mirasoldavila13](https://github.com/mirasoldavila13) 
## Walkthrough Video
