import React from 'react';
import './ErrorCard.css';

function ErrorCard({ message }) {
  return <div className='error_card'>{message}</div>;
}

export default ErrorCard;
