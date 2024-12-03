# Testing Plan

## Testing
The testing of the whole project will be carried out by Adarsha and Shishir who are two graduate students in the team. Beyond Test driven Development on the backend which was done step by step with the help of postman, we will be doing two different kind of test on two comonents of complexity, Login & Signup and Admin Dashboard.

## Testing Framework
The following frameworks will be used in testing:

### Functional Testing
Functional Testing will be carried out with the help of jest framework along with supertest for the testing of variious inputs and the expected outputs. For the Admin dashboard, the use of jest and supertest snippet differs with the structure of some of the code in our project, so we decided to rely on manual testing for that part.

### Integration Testing
Integration testing will be done manually for the whole project. We will manually enter various data with different test cases and verify manually if the project is working. The datas will be populated from the frontend and checked if it works well and gets populated to the backend,and displayed on the dashboard if applicable.

## Testing Plan Justification
For the testing plan we have relied heavily with manual testing for the integration testing part. This is because both of us have minimal experience with the automation testing and also because of time constraint. The integration testing needs to be carried out from the frontend to the backend and needs technical expertise of testing framework. Therefore, we decided to use what is predominantly done in software companies, manually test the components from frontend all the way to the database and update it on the exel sheet.

## Testing Framework Justification
In our project, we utilized Jest and integration testing due to their alignment with our tech stack and testing needs.

### Justification for Functional Testing
Functional testing ensures the system meets requirements by validating outputs for given inputs. Using Jest and Supertest, we tested critical user workflows like login and signup to identify issues efficiently. This approach was chosen for its effectiveness in verifying essential functionalities within our time constraints.

### Justification for Integration Testing
We needed to see if the whole project work together from frontend to the backend. The best way to verify these components work well together is from integration testing. For simplicity and reliability we opted for the manual testing for this testing framework.

### Signature
Adarsha Subedi,Shishir Paudel
