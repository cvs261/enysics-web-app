import React from 'react';
import Navbar from '../components/Navbar';
import './Optics.css';

const Optics: React.FC = () => {
  return (
    <div className="optics-page">
      {/* Navbar Principal și Secundar */}
      <Navbar />

      {/* Conținutul Paginii */}
      <div className="optics-content">
        <h1>Optics</h1>
        <p>Welcome to the Optics section. Explore topics like refraction, reflection, lenses, and wave optics.</p>

        {/* Exemplu de conținut suplimentar */}
        <div className="optics-tools">
          <h2>Tools and Calculations</h2>
          <ul>
            <li>Snell's Law Calculator</li>
            <li>Lens Maker's Equation</li>
            <li>Reflection and Refraction Angles</li>
            <li>Interference and Diffraction Patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Optics;
