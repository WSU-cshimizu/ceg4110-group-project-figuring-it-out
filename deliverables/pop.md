# Figuring It Out - Project Overview Proposal

## Project Name
###### Recreation Center Equipment Management System (RCEMS)

## Elevator Pitch
Recreation Center Equipment Management System (RCEMS) will allow users to book and manage recreational equipment online. Users will be asked to register and then be able to check availability and book items like bicycles and footballs online, while the system ensures real-time updates and reduces wait times. The administrators can easily track bookings and handle reports of damage. With our focus on convenience and efficiency, RCEMS will improve the overall experience for both users and administrators. 

## Components of Complexity
1. Backend: Store data like equipment availability, damage reports, and user activity.
2. Website: Serve as the primary interface for students and administrators to interact with the system, view available equipment, book items, and report damage.
3. User Authentication (Student and Admin Login): Implement user roles with access restrictions. Features for students to track booking history. Admin panel for managing equipment and handling bookings.
4. Equipment Booking System: Display Real-time availability for all equipment offered. Equipment reservation and management of the booking lifecycle, if it is available, when to return.
5. Breakage/Damage Reporting: Students can report damage or malfunction of equipment. Administrators can see the equipment status and update based on the report.

## Predicted Architecture
1. FrontEnd
Components: handles UI rendering, user interactions and state management.

State Management Tools: Context API would be used for managing application states.

APIs: Using Frontend , components make requests to the backend through API to fetch and update datas from the database.

2. Backend
Node JS : Runtime environment for Javascript that is used to run server side code . 

Express: Framework that acts as a middleware framework used for handling HTTP requests and building API. 

3. Database
Mongo DB: NoSQL database used to store the data for application.

## Languages and Technology
We chose this Tech stack because Using javascript , we can handle both front end and backend . It allows us to create a dynamic and interactive system . Also we can carry out complex actions. 

1. MongoDB: A database for storing and managing different types of data.
2. Express.js: A framework that helps us build the server-side application and handle requests easily.
3. Next.js: A tool for creating the frontend of our app, which makes it fast and efficient by handling server-side rendering and dynamic pages.
4. Node.js: The environment that lets us run JavaScript on the server, making everything work together smoothly.

## Life Cycle and Methodology
We will use Agile methodology for our project to keep our project more flexible and responsive to changes. 

sprint : We will be dividing our work into 12 days of spring and each sprint would be focused on completing specific tasks and features which would allow us to make regular progress and changes if necessary. 

Scrum : To stay organized and keep things running smothly , We will have team check-ins where everyone on the team shares what they're working on , what they have done recently and problems they are facing.
We will be having sprint planning at the start of the sprint and sprint reviews at the end of the sprint.

## Signatures
Estuardo Marroquin
Shishir Paudel 