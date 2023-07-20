# car-prices-prediction-frontend

This repository contains the frontend application for predicting car prices using a FastAPI backend service. The application is developed using React and Material-UI.

**Features**

1.Predict car prices based on provided car details.
2.User-friendly interface with input fields for car information.
3.Real-time prediction using the backend service.


**Installation**

1. Clone the repository:
   git clone https://github.com/<your-username>/car-price-prediction-frontend.git

2. Change into the project directory:
   cd car-price-prediction-frontend

3. Install the project dependencies:
   npm install

**Usage**
1. Start the frontend application:
   npm start

2. The application will be accessible at http://localhost:3000 in your web browser.

**How to Use**
1.Fill in the car details in the provided input fields. 
Input fields include:
    Mark
    Model
    Generation Name
    Year
    Mileage
    Volume of Engine
    Fuel
    City
    Province
    
2.Click the "Predict" button to submit the car details.
3.The application will send the car details to the backend service and receive the predicted car price.
4.The predicted car price will be displayed below the input fields.


# Backend Service

The frontend application communicates with the backend service, which performs the car price prediction. The backend service is developed using FastAPI and Python. You can find the backend service code https://github.com/UtkarshaGupte/Car-Prices-Prediction-Backend .

Make sure the backend service is running on http://localhost:8000 or update the API endpoint URL in the frontend code (App.js) to match the backend service location.


# Technologies Used

React: Frontend framework for building user interfaces.
Material-UI: React component library for UI design.
Axios: HTTP client for making API requests.
FastAPI: Backend framework for building API services.
Python: Programming language for the backend service.

