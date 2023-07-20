import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;