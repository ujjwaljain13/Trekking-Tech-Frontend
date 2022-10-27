# TREKKING TECH 2022 
<img width="475" alt="Screenshot 2022-10-27 at 7 25 14 PM" src="https://user-images.githubusercontent.com/103581884/198304233-a1714682-df62-4a26-81ea-b901d01d8489.png">


# SCREENSHOTS

<img width="1440" alt="Screenshot 2022-10-27 at 6 21 56 PM" src="https://user-images.githubusercontent.com/103581884/198289303-913524cd-d041-46a8-a129-876f300891f2.png">
<img width="1440" alt="Screenshot 2022-10-27 at 6 22 58 PM" src="https://user-images.githubusercontent.com/103581884/198289529-3f1cc2f0-db32-4a0c-a255-68b758cf8e9b.png">
<img width="1440" alt="Screenshot 2022-10-27 at 6 23 16 PM" src="https://user-images.githubusercontent.com/103581884/198289601-e76d27db-0f58-42d1-885a-2a4785696961.png">
<img width="1440" alt="Screenshot 202![Uploading Screenshot 2022-10-27 at 6.25.54 PM.png…]()
2-10-27 at 6 24 48 PM" src="https://user-images.githubusercontent.com/103581884/198290008-4551d2ed-5092-4944-a49b-7ccbb65e0d25.png">
<img width="1440" alt="Screenshot 2022-10-27 at 6 31 14 PM" src="https://user-images.githubusercontent.com/103581884/198291483-24c7a2aa-9fea-4f44-9336-cb5ac73e79ca.png">
<img width="1440" alt="Screenshot 2022-10-27 at 6 31 28 PM" src="https://user-images.githubusercontent.com/103581884/198291547-6e4539eb-5dde-4460-9774-f8c141e885f7.png">
<img width="1440" alt="Screenshot 2022-10-27 at 6 31 42 PM" src="https://user-images.githubusercontent.com/103581884/198291589-4687df2e-77db-4d31-ada8-772b22253480.png">
<img width="1440" alt="Screenshot 2022-10-27 at 6 32 13 PM" src="https://user-images.githubusercontent.com/103581884/198291675-f1fc749d-ab86-4243-b60f-0e424da38139.png">

# HOSTED URL

https://trekking-tech.netlify.app/

# FEATUTRES IMPLEMENTED

## FRONTEND
1. Website is made responsive and funcitonal for mobile users also. So users on any device can get access to our website.
2. There is a countdown on the landing page which show the number of days left for the fest.
3. Each User has his own Profile page where he/she can see which events have they registered
4. Users can sign in themselves and view all the events with their required details.
5. Each event has its own dedicated page and Registration and Revoke link.
6. Users can log out of the website and hence terminate their session from the browser.
7. There is a Dedicated Contact Form for all users which can be used by the public for asking their queries and providing new ideas to our team.

## BACKEND

User
1. Register : To register the user
2. Login : To sign in the user
3. Dashboard : To take all the information about the user
4. Event : To get information about the registered events

Events
1. Register : To register the user to an event.
2. Revoke : To revoke the user from an event.

User Authentication
1. We added Password Validation for users to enter strong passwords.
2. Passwords are not stored as plain-texts they are hashed and salted then stored in the database.
3. We enabled compression middleware to compress response bodies for all request that traverse through the middleware.

# Technologies, Libraries and Packages Used

## FRONTEND
1. HTML
2. CSS
3. JavaScript
4. Email.js
5. Prism.js
6. FontAwesome
7. Ionicons
8. SweetAlertsJS

## BACKEND
1. NodeJS
2. ExpressJS
3. Nodemon
4. Bcrypt
5. Axios
6. Express-Validator
7. JsonWebToken
8. jsdom
9. CORS
10. pg
11. Dotenv
12. Cheerio

# LOCAL SETUP

## FRONTEND
1. Fork the repository.
2. Clone the repository
3. git clone https://github.com/ujjwaljain13/Trekking-Tech-Frontend.git
4. Open the folder in which you cloned the repository.
5. Open all the files in your code editor
6. Open index.html to go to the landing page of the website.

## BACKEND
1. Fork the repository.
2. Clone the repository
3. git clone https://github.com/shreshthgoyal/Essence-Backend.git
4. Open the folder in which you cloned the repository.
5. Run this command to install all the packages (npm install)
6. Create a new .env file to store required enviorment variables.
7. Create your own secret key to hash and salt passwords and store it in SECRET_KEY in your .env file.
8. Create your own PostgresSQL Database locally or on ElephantSQL. All the PSQL queries are present in database folder.
9. Once hosted add the hosted URL in DB_URL in your .env file.
10. Now on your terminal run this command to start your server (npm run)

# Team Name - Upsilon

# Team Members
1. Himanshu Gautam (2021IMT-044)
2. Ujjwal Jain (2021IMT-105) 
