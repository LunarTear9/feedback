import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import './App.css';
import icon from './asset/icon.png'; // Import the icon

const firebaseConfig = {
  authDomain: "weather-app-d14d8.firebaseapp.com",
  databaseURL: "https://weather-app-d14d8-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "weather-app-d14d8",
  storageBucket: "weather-app-d14d8.appspot.com",
  // Add apiKey, messagingSenderId, and appId if available
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const sendDataToFirebase = (event) => {
    event.preventDefault(); // Prevent default form submission

    const data = {
      name: name,
      age: age,
      email: email
    };

    const newDataRef = ref(db, 'users/' + push(ref(db, 'users')).key);
    set(newDataRef, data)
      .then(() => {
        console.log("Data sent successfully!");
        // Optionally, you can clear the form after submission
        setName('');
        setAge('');
        setEmail('');
      })
      .catch((error) => {
        console.error("Error sending data: ", error);
      });
  }

  return (
    <div className="app">
      <div className="container">
        <a href="https://www.pitmtech.com">
          <img src={icon} alt="Icon" className="icon" style={{ height: 150, width: 165 }} /> {/* Add the icon here */}
        </a>
        <form onSubmit={sendDataToFirebase}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={{marginRight:40}}
          />
         
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{marginRight:40}}
            
          />
          <br />
         
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Feedback Message"
            style={{marginRight:40}}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
