import React from 'react';

export default function MessageBox(props) {
  return (
    <div
      className={`alert alert-${props.variant || 'info'}`}
      style={{ marginTop: '3.7%', marginBottom: '2%' }}
    >
      {props.children}
    </div>
  );
}
