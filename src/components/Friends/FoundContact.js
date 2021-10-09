import React from 'react';

export default function FoundContact({ name, userName }) {
  return (
    <div className="FoundContact">
      <div>{name}</div>
      <div>( {userName} )</div>
    </div >
  );
}
