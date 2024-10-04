# Requirements Specification

## User Story 1
_As a registered user, I want to log in so I can view the available equipment and be able to book a reservation._
1. Requirement 1.1: User Authentication
    1. Requirement 1.1.1: The website shall provide a login form that accepts a username and password.
    2. Requirement 1.1.2: The website shall validate the credentials with the database.
2. Requirement 1.2: Viewing Available Equipment
   1. Requirement 1.2.1: After a successful login, the website shall display a list of available equipment.
   2. Requirement 1.2.2: The equipment list shall include details such as name, description, availability status, and booking options.
3.  Requirement 1.3: Booking a Reservation 
    1. Requirement 1.3.1: The website shall provide a booking interface for the selected equipment and to select dates and times for the reservation.

## User Story 2
_User Story: As an administrator, I want to be able to view the list of equipment and their damage reports, so I can update and keep track of their status._
1. Requirement 2.1: Viewing Equipment List
    1. Requirement 2.1.1: The website shall display a list containing all added equipment.
2. Requirement 2.2: Viewing equipment damage reports
    1. Requirement 2.2.1: The website shall allow you to view any submitted damage reports about the listed equipment.
3. Requirement 2.3: Tracking and updating equipment status
    1. Requirement 2.3.1: The website shall allow the admin to view the status of the listed equipment.
    2. Requirement: 2.3.2: The website shall allow the admin to update the status of the listed equipment.
  
## User Story 3
_As a student user, I want to be able to report damages so I can ensure maintenance fixes equipment for the next student._
1. Requirement 3.1: Damage Reporting Interface
	1. Requirement 3.1.1: The website shall provide a damage reporting form that allows users to select the equipment they want to report damage for.
	2. Requirement 3.1.2: The form shall include fields for users to describe the type of damage, its severity, and an optional photo upload.
	3. Requirement 3.1.3: The form shall require users to submit their student identification information with the report.
2. Requirement 3.2: Submission and Confirmation
	1. Requirement 3.2.1: Upon form submission, the website shall confirm the report by displaying a message that the damage has been successfully reported.
	2. Requirement 3.2.2: The damage report shall be sent to the backend, which stores the report in the database for review by the maintenance team.
3. Requirement 3.3: Damage Report History
	1. Requirement 3.3.1: The website shall allow student users to view their previously submitted damage reports, including status updates on maintenance or repair.

## User Story 5
_As an admin, I want to be able to add new equipment so I can keep the inventory up to date._

1. Requirement 5.1: Accessing Equipment Management
    1.	Requirement 5.1.1: The admin shall be required to log in with admin credentials to access the dashboard.

2. Requirement 5.2: Adding New Equipment
    1.	Requirement 5.2.1: The admin dashboard shall provide a form for adding new equipment.
    2.	Requirement 5.2.2: The form shall allow the admin to input equipment details, including name, description, quantity, and current availability status.
    3.	Requirement 5.2.3: The website shall validate that all required fields are filled before submitting the form.

3. Requirement 5.3: Updating the Inventory
    1.	Requirement 5.3.1: After the form submission, the system shall update the inventory with the new equipment data.
    2.	Requirement 5.3.2: The updated equipment shall be immediately reflected in the list of available equipment for students to view and book.


## Developer Story 1
_As a Frontend developer, I want to know what information I'm going to receive and send back to design an effective and appropriate User Interface._
1. Requirement 1.1: Data Input and Output for Login
   1. Requirement 1.1.1: The login form shall send the username and password to the backend for authentication.
   2. Requirement 1.1.2: The frontend shall return a success or failure response based on the login attempt.
2. Requirement 1.2: Storing Data for Available Equipment
   1. Requirement 1.2.1: The backend shall provide a response that includes a list of available equipment with names, descriptions, and availability Status.
   2. Requirement 1.2.2: The frontend shall be able to process and display this data in an organized way.

## Developer Story 2
_As a Frontend Developer I want to understand what data the administrators need to see, and how to properly interact with the Backend so I can display that information._
1. Requirement 2.1: Displaying Administrative Information
   1. Requirement 2.1.1: The Admin UI shall provide a form to add new equipment.
   2. Requirement 2.1.2: The Admin UI shall display a table of all added equipment.
   3. Requirement 2.1.3: The Admin UI shall display a table of all equipment bookings.
   4. Requirement 2.1.4: The Admin UI shall display the status of all added equipment.
2. Requirement 2.2: Interacting with the Backend
   1. Requirement 2.2.1: The Backend shall allow adding new equipment to the database.
   2. Requirement 2.2.2: The Backend shall provide a way to query the list of equipment.
   3. Requirement 2.2.3: The Backend shall provide a way to access all equipment bookings.
   4. Requirement 2.2.4: The Backend shall allow the querying and modification of all equipment status.
  
## Developer Story 3
_As a Frontend developer, I want to know what validation is needed on the booking forms so that the correct data is passed to the Backend without errors._
1. Requirement 3.1: Frontend Validation for Booking Forms
    1. Requirement 3.1.1: The booking form shall validate required fields, including equipment selection, start date, and end date.
    2. Requirement 3.1.2: The booking form shall ensure that the selected date and time do not overlap with existing reservations.
    3. Requirement 3.1.3: The form shall validate that the end date and time are after the start date and time.
    4. Requirement 3.1.4: The form shall restrict the selection of past dates for bookings.
2. Requirement 3.2: Error Handling and Response
    1. Requirement 3.2.1: The frontend shall display user-friendly error messages for validation failures, such as missing required fields or invalid date selections.
    1. Requirement 3.2.2: The frontend shall send validated form data to the backend and handle responses for successful and failed booking attempts.

## Developer Story 4
_As a Backend Developer, I want to manage equipment availability data through Create, Read, Update, and Delete (CRUD) operations, so the system can accurately reflect the current availability of equipment._

1. Requirement 4.1: Data Input and Output for Equipment Availability
    1. Requirement 4.1.1: The backend shall provide an API for creating new equipment availability records.
    2. Requirement 4.1.2: The backend shall provide an API for viewing the list of available equipment, including details like equipment ID, name, and availability status.
    3. Requirement 4.1.3: The backend shall provide an API for updating and deleting the availability  of equipment.
2. Requirement 4.2: Database Integration for Equipment Availability
    1. Requirement 4.2.1: The backend shall store all equipments data in the MongoDB database.
    2. Requirement 4.2.2: The database shall track equipment details
3. Requirement 4.3: Validation and Error Handling
    1. Requirement 4.3.1: The backend shall validate input data for equipments operations 
    2. Requirement 4.3.2: The backend shall return appropriate error messages for invalid data and reurn relevant status code.

## Developer Story 5
_As a Backend Developer, I want to implement a damage reporting system so the admin can access and manage reports from students._

1. Requirement 5.1: Damage Reporting API
    1. Requirement 5.1.1: The system shall provide an API endpoint for students to submit damage reports.
    2. Requirement 5.1.2: The backend shall store submitted reports in the database.
2. Requirement 5.2: Managing Damage Reports
    1.  Requirement 5.2.1: The system shall provide an API for admins to fetch and view all damage reports.
    2. Requirement 5.2.2: The system shall provide an API for admins to update the status of damage reports (e.g., "In Progress," "Resolved").
    3. Requirement 5.2.3: The system shall allow admins to delete damage reports from the database.
3. Requirement 5.3: Validation and Error Handling
    1. Requirement 5.3.1: The backend shall validate all required fields in the damage report submission.
    2. Requirement 5.3.2: The backend shall return appropriate error messages for invalid data and reurn relevant status code.

## Testing Story 1
_As a tester, I want to ensure that the login page works properly so that the user will be prompted to log in before accessing any other functionality on the site._

1. Requirement 1.1: Login Form Functionality
    1. Requirement 1.1.1: The login form shall accept valid username and password combinations.
    2. Requirement 1.1.2: The system shall display an error message when incorrect credentials are entered.
    3. Requirement 1.1.3: Upon successful login, the user shall be redirected to the homepage or dashboard.
2. Requirement 1.2: User Session Process
    1. Requirement 1.2.1: The system shall validate entered credentials in the database.
    2. Requirement 1.2.2: A session shall be created for the user upon successful authentication.
    3. Requirement 1.2.3: The user shall remain logged in until they log out or the session expires.
