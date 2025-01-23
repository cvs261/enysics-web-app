import React from 'react';
import Navbar from '../components/Navbar';
import './Electricity.css';

const Electricity: React.FC = () => {
  return (
    <div className="electricity-page">
      {/* Navbar Principal și Secundar */}
      <Navbar />

      {/* Conținutul Paginii */}
      <div className="electricity-content">
        <h1>Electricity</h1>
        <p>Welcome to the Electricity section. Explore electrical circuits, current, voltage, resistance, and power.</p>

        {/* Exemplu de conținut suplimentar */}
        <div className="electricity-tools">
          <h2>Tools and Calculations</h2>
          <ul>
            <li>Ohm's Law Calculator</li>
            <li>Power and Energy Calculations</li>
            <li>Resistors in Series and Parallel</li>
            <li>Capacitance and Inductance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Electricity;
