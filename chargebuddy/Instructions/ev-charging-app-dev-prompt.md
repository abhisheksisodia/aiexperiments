# EV Charging App Development Prompt

You are an expert in TypeScript, Next.js App Router, React, and Tailwind. Follow @Next.js docs for Data Fetching, Rendering, and Routing.

Your job is to create an EV charging tracking application with the following features:

1. User authentication using Firebase Auth
2. Tab navigation to different routes: Home, Charge Tracking, Trip Logging, Charger Map, and Profile
3. User profiles with customizable information including vehicle details
4. Ability to manually enter charging sessions and trip data
5. A home dashboard displaying key statistics and recent activities
6. Charger map showing nearby charging stations with availability and cost information
7. Optimal charging time recommendations based on user schedules and electricity rates

Use the existing Firebase configuration and utility functions from the codebase. Implement the EV charging app functionality in new page components for the dashboard, charge tracking, trip logging, charger map, and profile. Create any necessary components for the user interface and data entry forms. Replace any existing code in the codebase to transform it into an EV charging tracking application.

Specific Implementation Guidelines:

1. Authentication:
   - Implement sign-up, login, and logout functionality using Firebase Auth
   - Create protected routes that require authentication

2. Dashboard (Home):
   - Display summary statistics: total energy charged, average cost, total trips, etc.
   - Show recent charging sessions and trips
   - Implement a widget for optimal charging time recommendations

3. Charge Tracking:
   - Create a form for manual entry of charging sessions (date, time, location, energy added, cost)
   - Display a list/table of past charging sessions with sorting and filtering options
   - Implement a chart showing charging costs over time

4. Trip Logging:
   - Develop a form for logging trips (start/end locations, date, distance, energy used)
   - Show a list of past trips with relevant statistics
   - Create a map view of logged trips (if time permits)

5. Charger Map:
   - Integrate a map view (consider using Leaflet.js or Google Maps)
   - Display charging stations as markers on the map
   - Implement a list view of nearby chargers with filtering options
   - Allow users to view detailed information about each charger

6. Profile:
   - Create a profile page where users can view and edit their information
   - Implement a form for adding and managing vehicle information
   - Display user-specific statistics and achievements

7. Data Management:
   - Use Firebase Firestore for storing user data, charging sessions, trips, and vehicle information
   - Implement real-time updates where appropriate (e.g., charger availability)
   - Use Firebase Storage for handling user-uploaded images (e.g., profile pictures)

8. Optimal Charging Recommendations:
   - Create a form for users to input their electricity rates and schedule
   - Implement an algorithm to calculate the most cost-effective charging times
   - Display recommendations on the dashboard and as notifications (if time permits)

9. UI/UX:
   - Use Tailwind CSS for styling, ensuring a responsive design
   - Implement a cohesive color scheme and design language throughout the app
   - Create reusable components for common elements (buttons, forms, cards, etc.)

10. Performance and Optimization:
    - Utilize Next.js App Router for efficient routing and data fetching
    - Implement proper loading states and error handling
    - Optimize database queries and implement pagination where necessary

Remember to follow React and Next.js best practices, including the use of hooks, context API for state management, and server-side rendering where appropriate. Ensure that the app is accessible and provides a smooth user experience across different devices and screen sizes.

