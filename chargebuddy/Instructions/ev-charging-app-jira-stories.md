# EV Charging App MVP - UI JIRA Stories

## Epic: Charge Cost Tracking

1. Story: Create Charge Entry Form
   - Description: Design and implement a form for users to manually enter charging session details.
   - Acceptance Criteria:
     - Form includes fields for date, time, location, energy added, and cost
     - Form has validation for all fields
     - Submit button saves the entry
     - Cancel button clears the form

2. Story: Display Charge History List
   - Description: Create a scrollable list view of all charging sessions.
   - Acceptance Criteria:
     - List shows date, location, energy added, and cost for each session
     - List is sortable by date and cost
     - Tapping an entry opens a detailed view

3. Story: Implement Charge Cost Dashboard
   - Description: Design a dashboard summarizing charging costs.
   - Acceptance Criteria:
     - Shows total cost for current month and year
     - Displays average cost per kWh
     - Includes a simple bar chart of costs over time

## Epic: Trip Logging and Statistics

4. Story: Create Trip Entry Form
   - Description: Design and implement a form for users to log trip details.
   - Acceptance Criteria:
     - Form includes fields for start/end location, date, distance, and energy used
     - Form has validation for all fields
     - Submit button saves the entry
     - Cancel button clears the form

5. Story: Display Trip History List
   - Description: Create a scrollable list view of all logged trips.
   - Acceptance Criteria:
     - List shows date, start/end locations, distance, and energy used
     - List is sortable by date and distance
     - Tapping an entry opens a detailed view

6. Story: Implement Trip Statistics Dashboard
   - Description: Design a dashboard summarizing trip statistics.
   - Acceptance Criteria:
     - Shows total distance traveled and energy used
     - Displays average energy efficiency (kWh/mile or kWh/km)
     - Includes a pie chart of trip purposes (if collected)

## Epic: Charger List and Information

7. Story: Design Charger List View
   - Description: Create a list view of nearby chargers.
   - Acceptance Criteria:
     - List shows charger name, type, availability status, and distance
     - List is sortable by distance and availability
     - Implement a search/filter functionality

8. Story: Implement Charger Detail View
   - Description: Design a detailed view for individual chargers.
   - Acceptance Criteria:
     - Shows all relevant information (type, cost, availability, address)
     - Includes a small map with the charger's location
     - Provides an option to get directions

9. Story: Create Charger Map View
   - Description: Implement a map view showing charger locations.
   - Acceptance Criteria:
     - Map displays charger locations with custom pins
     - Tapping a pin shows a brief info popup
     - Allows filtering by charger type

## Epic: Optimal Charging Times

10. Story: Design Electricity Rate Input Form
    - Description: Create a form for users to input their electricity rate structure.
    - Acceptance Criteria:
      - Allows input of different rates for different times of day
      - Supports weekday/weekend rate differences
      - Provides an option to set a default rate

11. Story: Implement Charging Schedule View
    - Description: Design a weekly view showing optimal charging times.
    - Acceptance Criteria:
      - Displays a weekly calendar with suggested charging slots
      - Allows users to input their typical schedule
      - Highlights the most cost-effective charging times

12. Story: Create Charging Recommendation Popup
    - Description: Implement a popup that suggests the best time to charge.
    - Acceptance Criteria:
      - Appears when the user plugs in their vehicle (simulated in MVP)
      - Shows potential cost savings for optimal charging time
      - Allows user to accept or dismiss the recommendation

## Epic: Charging Station Reviews

13. Story: Design Review Input Form
    - Description: Create a form for users to submit charger reviews.
    - Acceptance Criteria:
      - Includes fields for rating, comments, and photo upload
      - Implements a star-rating system
      - Has a character limit for comments

14. Story: Display Review List for Chargers
    - Description: Add a review section to the charger detail view.
    - Acceptance Criteria:
      - Shows average rating and number of reviews
      - Displays a scrollable list of recent reviews
      - Includes user ratings, comments, and photos (if any)

15. Story: Implement "Add Review" Button
    - Description: Add a button to allow users to leave a review from the charger detail view.
    - Acceptance Criteria:
      - Button is prominently displayed on the charger detail view
      - Clicking the button opens the review input form
      - After submission, the new review appears at the top of the list

