 import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css'; // Import the CSS file for component-specific styles

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const Heading = () => <h1 className="heading">Welcome to My Website!</h1>;

const Card = ({ title, content }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2>
    <p className="card-content">{content}</p>
  </div>
);

const App = () => (
  <div>
    <Navbar />
    <Heading />
    <div className="card-container">
      <Card
        title="Card 1"
        content="This is the content of Card 1."
      />
      <Card
        title="Card 2"
        content="This is the content of Card 2."
      />
      <Card
        title="Card 3"
        content="This is the content of Card 3."
      />
    </div>
  </div>
);

export default App;
