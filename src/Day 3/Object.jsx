import React from 'react';

export default function ShowObject() {

  const person = {
    name: 'Aashish',
    age: 19,
    city: 'Kathmandu'
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  );
}