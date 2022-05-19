import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ children, onClick }) {
  return (
    <Button onClick={onClick} variant="contained">
      {children}
    </Button>
  );
  //all react components have a prop called children that gets the stuff inside
  // we are passing down onClick as a prop
}
