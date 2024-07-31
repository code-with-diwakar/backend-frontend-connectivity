import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes') // Correct API endpoint
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Add an empty dependency array to prevent infinite requests

  return (
    <>
      <h1>Hello World</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>  
          <h3>{joke.title}</h3>
          <p>{joke.name}</p> 
          <p>{joke.price}</p>
        </div>
      ))}
    </>
  );
}

export default App;
