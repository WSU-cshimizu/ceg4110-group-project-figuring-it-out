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


## Developer Story 1
_As a Frontend developer, I want to know what information I'm going to receive and send back to design an effective and appropriate User Interface._
1. Requirement 2.1: Data Input and Output for Login
   1. Requirement 2.1.1: The login form shall send the username and password to the backend for authentication.
   2. Requirement 2.1.2: The frontend shall return a success or failure response based on the login attempt.
2. Requirement 2.2: Storing Data for Available Equipment
   1. Requirement 2.2.1: The backend shall provide a response that includes a list of available equipment with names, descriptions, and availability Status.
   2. Requirement 2.2.2: The frontend shall be able to process and display this data in an organized way. 