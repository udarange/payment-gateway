import React from 'react';

export default function YourOrder(): JSX.Element {
  return (
    <div
      className="p-3"
      style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        border: '1px solid #e9ecef',
      }}
    >
      <h2>Your Order</h2>
      <div className="d-flex flex-row justify-content-between">
        <p>Total Amount:</p>
        <p>100 LKR</p>
      </div>
    </div>
  );
}
