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