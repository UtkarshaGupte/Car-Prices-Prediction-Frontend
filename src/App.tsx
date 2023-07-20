
import React, { useState } from 'react';
import CustomButton from './components/Button.tsx';

import axios from 'axios';

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  TextField,
  useMediaQuery,
} from '@mui/material';


interface CarDetails {
  mark: string;
  model: string;
  generation_name: string;
  year: number;
  mileage: number;
  vol_engine: number;
  fuel: string;
  city: string;
  province: string;
}

const Card: React.FC = ({ children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      {children}
    </div>
  );
};


const App: React.FC = () => {
  const [carDetails, setCarDetails] = useState<CarDetails>({
    mark: '',
    model: '',
    generation_name: '',
    year: 0,
    mileage: 0,
    vol_engine: 0,
    fuel: '',
    city: '',
    province: '',
  });
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarDetails((prevCarDetails) => ({
      ...prevCarDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/car-price-prediction', carDetails);
      setPredictedPrice(response.data.predicted_price);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 overflow-auto">
      <div className="container-sm">
        <div className="border p-4 rounded bg-white d-flex flex-column mx-auto" style={{ width: '40%' }}>
          <h4 className="text-center mb-4">Car Price Prediction</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Mark"
                name="mark"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Model"
                name="model"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Generation Name"
                name="generation_name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Year"
                name="year"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Mileage"
                name="mileage"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Volume of Engine"
                name="vol_engine"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Fuel"
                name="fuel"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Province"
                name="province"
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Add other input fields using the same format */}
            <div className="d-flex justify-content-center mt-4">
              <CustomButton type="submit" onClick={handleSubmit}>
                Predict
              </CustomButton>
            </div>
          </form>
          {predictedPrice !== null && (
            <div className="d-flex flex-column justify-content-center align-items-center mt-2">
              <h6 className="text-center mb-0">Predicted Price:</h6>
              <p className="text-center">${predictedPrice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
