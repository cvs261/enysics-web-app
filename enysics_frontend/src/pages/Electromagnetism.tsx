import React from 'react';
import Navbar from '../components/Navbar';
import './Electromagnetism.css';

const Electromagnetism: React.FC = () => {
  return (
    <div className="electromagnetism-page">
      {/* Navbar Principal și Secundar */}
      <Navbar />

      {/* Conținutul Paginii */}
      <div className="electromagnetism-content">
        <h1>Electromagnetism</h1>
        <p>Welcome to the Electromagnetism section. Explore topics like electric fields, magnetic fields, Faraday's law, and Maxwell's equations.</p>

        {/* Exemplu de conținut suplimentar */}
        <div className="electromagnetism-tools">
          <h2>Tools and Calculations</h2>
          <ul>
            <li>Electric Field Calculator</li>
            <li>Magnetic Flux and Induction</li>
            <li>Faraday's and Lenz's Laws</li>
            <li>Maxwell's Equations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Electromagnetism;
