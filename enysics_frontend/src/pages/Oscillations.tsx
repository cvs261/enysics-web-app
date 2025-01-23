import React from 'react';
import Navbar from '../components/Navbar';
import './Oscillations.css';

const Oscillations: React.FC = () => {
  return (
    <div className="oscillations-page">
      {/* Navbar Principal și Secundar */}
      <Navbar />

      {/* Conținutul Paginii */}
      <div className="oscillations-content">
        <h1>Oscillations</h1>
        <p>Welcome to the Oscillations section. Explore topics like harmonic motion, pendulums, resonance, and wave properties.</p>

        {/* Exemplu de conținut suplimentar */}
        <div className="oscillations-tools">
          <h2>Tools and Calculations</h2>
          <ul>
            <li>Simple Harmonic Motion Calculator</li>
            <li>Pendulum Period and Frequency</li>
            <li>Wave Properties: Amplitude, Wavelength, and Speed</li>
            <li>Resonance and Damping</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Oscillations;
