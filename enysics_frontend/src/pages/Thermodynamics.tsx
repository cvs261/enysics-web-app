import React from 'react';
import Navbar from '../components/Navbar';
import './Thermodynamics.css';

const Thermodynamics: React.FC = () => {
  return (
    <div className="thermodynamics-page">
      {/* Navbar Principal și Secundar */}
      <Navbar />

      {/* Conținutul Paginii */}
      <div className="thermodynamics-content">
        <h1>Thermodynamics</h1>
        <p>Welcome to the Thermodynamics section. Here you can explore the laws of thermodynamics, heat transfer, and energy systems.</p>

        {/* Exemplu de conținut suplimentar */}
        <div className="thermodynamics-tools">
          <h2>Tools and Calculations</h2>
          <ul>
            <li>First Law of Thermodynamics</li>
            <li>Second Law of Thermodynamics</li>
            <li>Heat Transfer Calculations</li>
            <li>Entropy and Enthalpy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Thermodynamics;
