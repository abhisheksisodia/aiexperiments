# EV Charging App MVP - UI JIRA Stories (Continued)

## Epic: User Profile

16. Story: Design User Profile Screen
    - Description: Create a main profile screen displaying user information and navigation to sub-sections.
    - Acceptance Criteria:
      - Displays user's name, email, and profile picture
      - Shows summary statistics (total trips, total energy charged, etc.)
      - Includes navigation buttons to Settings and Vehicles screens
      - Implements an "Edit Profile" button

17. Story: Implement Edit Profile Form
    - Description: Create a form allowing users to edit their profile information.
    - Acceptance Criteria:
      - Allows editing of name, email, and password
      - Includes option to upload or change profile picture
      - Implements proper validation for all fields
      - Provides "Save" and "Cancel" buttons

18. Story: Create Account Deletion Flow
    - Description: Design a process for users to delete their account.
    - Acceptance Criteria:
      - Accessible from the profile screen
      - Includes a confirmation step explaining the consequences
      - Requires password re-entry for security
      - Provides feedback on successful deletion

## Epic: App Settings

19. Story: Design Main Settings Screen
    - Description: Create a screen listing all configurable app settings.
    - Acceptance Criteria:
      - Organizes settings into logical categories (e.g., General, Notifications, Data)
      - Implements toggle switches for binary options
      - Provides navigation to more complex setting screens

20. Story: Implement Notification Preferences
    - Description: Design a screen for users to manage their notification preferences.
    - Acceptance Criteria:
      - Allows toggling of different notification types (e.g., charging complete, new nearby charger)
      - Provides options for notification method (push, email)
      - Includes a "test notification" button

21. Story: Create Data Management Options
    - Description: Design a screen for users to manage their app data.
    - Acceptance Criteria:
      - Provides options to export user data
      - Includes functionality to clear app cache
      - Offers option to sync data across devices (for future implementation)

22. Story: Implement Unit and Currency Selection
    - Description: Create options for users to set their preferred units and currency.
    - Acceptance Criteria:
      - Allows selection of metric or imperial units
      - Provides a list of currencies to choose from
      - Implements a preview of how selections will appear in the app

## Epic: Vehicle Management

23. Story: Design Vehicle List Screen
    - Description: Create a screen displaying all vehicles added by the user.
    - Acceptance Criteria:
      - Shows a list of added vehicles with basic info (make, model, year)
      - Includes an "Add New Vehicle" button
      - Allows deletion of vehicles with a swipe-to-delete or similar gesture
      - Tapping a vehicle opens its detailed view

24. Story: Implement Add/Edit Vehicle Form
    - Description: Create a form for adding new vehicles or editing existing ones.
    - Acceptance Criteria:
      - Includes fields for make, model, year, and battery capacity
      - Provides a way to set a default vehicle
      - Implements proper validation for all fields
      - Offers "Save" and "Cancel" buttons

25. Story: Create Vehicle Detail View
    - Description: Design a screen showing detailed information about a specific vehicle.
    - Acceptance Criteria:
      - Displays all vehicle information
      - Shows vehicle-specific statistics (total trips, energy efficiency)
      - Includes an "Edit" button to modify vehicle information
      - Provides an option to view all trips made with this vehicle

26. Story: Implement Vehicle Performance Dashboard
    - Description: Create a dashboard showing key performance metrics for each vehicle.
    - Acceptance Criteria:
      - Displays average energy efficiency over time
      - Shows total distance traveled and energy consumed
      - Includes a chart comparing actual range to rated range
      - Provides tips for improving vehicle efficiency based on user data

