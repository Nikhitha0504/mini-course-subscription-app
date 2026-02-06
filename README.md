# Mini Course Subscription Application (Black Friday Edition) #

A full-stack web application where users can sign up, browse courses, and subscribe to free or paid courses using a mock Black Friday promo code.

Note: This project uses mock payments only. No real payment gateway is integrated.

## Features:
JWT-based Authentication (Signup & Login)
Browse all available courses
Search courses by name or course ID
Free and Paid courses
Black Friday promo code support (BFSALE25 – 50% OFF)
Subscribe to courses
View subscribed courses in My Courses
Cloud deployed (Frontend + Backend)

## Tech Stack:
Frontend: React, React Router, Axios, Bootstrap
Backend: Node.js, Express.js, JWT Authentication
Database: MongoDB Atlas, Mongoose
Deployment: Frontend – Vercel, Backend – Render


## Promo Code Details:
Promo Code: BFSALE25
Discount: 50%
Applicable only for paid courses
Payment is fully mock-based

## Application Pages:
Signup Page – Create a new user account
Login Page – Authenticate using email and password
Home Page – View all available courses and search by course name or ID
Course Detail Page – View full course details, apply promo code, and subscribe
My Courses Page – View all subscribed courses with price paid and subscription date

##  Project Structure:
black-friday-course-app/
backend/ (controllers, models, routes, middleware, server.js, .env)
frontend/ (src, public, package.json, build)
README.md

## Setup Instructions (Local Development):

Clone the repository:
git clone <https://github.com/Nikhitha0504/mini-course-subscription-app>
cd black-friday-course-app

Backend setup:
cd backend
npm install

Create a .env file in backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:
npm start

Backend runs on:
http://localhost:5000

Frontend setup:
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

## Deployment:
Backend is deployed on Render with GitHub integration and environment variables configured in the Render dashboard. Auto-deploy is enabled on push.
Frontend is deployed on Vercel with root directory set to frontend, framework as Create React App, build command npm run build, and output directory build.

## Screenshots (Recommended):
Signup Page<img width="2879" height="1519" alt="image" src="https://github.com/user-attachments/assets/5caa9328-6d46-4af4-b755-11b550fbd1e4" />
login page<img width="2879" height="1452" alt="image" src="https://github.com/user-attachments/assets/d5c162a9-cfb1-495b-9d6f-0e5fe3bb6514" />
Courses List (Home)<img width="1418" height="1523" alt="image" src="https://github.com/user-attachments/assets/ef9a45fd-d2a8-4278-bce5-19917f5ca709" />
Course Detail Page<img width="1058" height="1379" alt="image" src="https://github.com/user-attachments/assets/6825f720-5bf8-47f0-96d4-ba9517e10a67" />
My Courses Page<img width="2878" height="1062" alt="image" src="https://github.com/user-attachments/assets/d97e4a59-8071-4031-9105-1ec43f3ffa98" />


## Task Requirements Checklist:
Authentication using JWT
Signup and Login implemented
Course Listing
Course Details page
Subscription logic for free and paid courses
Promo code validation
My Courses page
Database integration
Cloud deployment
README documentation

# Submission:
GitHub Repository: <https://github.com/Nikhitha0504/mini-course-subscription-app>
Live Frontend URL: <https://mini-course-subscription-app.vercel.app/>
Live Backend URL: <https://mini-course-subscription-app.onrender.com/>

## Author:
 Nikhitha Nidumukkula
