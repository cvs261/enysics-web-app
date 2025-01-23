import React, { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { homeOutline, personCircleOutline } from 'ionicons/icons'; // Importă iconul pentru casă
import { useHistory } from 'react-router-dom'; // Pentru navigare
import './Navbar.css';

const Navbar: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    generateStars(); // Generează stelele
    generatePlanets(); // Generează planetele
  }, []);

  const generateStars = () => {
    const container = document.querySelector('.stars');
    if (container) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        const duration = Math.random() * 5 + 5;
        star.style.animationDuration = `${duration}s`;
        container.appendChild(star);
      }
    }
  };

  const generatePlanets = () => {
    const container = document.querySelector('.planets');
    if (container) {
      for (let i = 0; i < 5; i++) {
        const planet = document.createElement('div');
        planet.classList.add('planet');
        planet.style.left = Math.random() * 100 + '%';
        planet.style.top = Math.random() * 70 + '%';
        const size = Math.random() * 50 + 20;
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        const duration = Math.random() * 20 + 10;
        planet.style.animationDuration = `${duration}s`;
        container.appendChild(planet);
      }
    }
  };

  return (
    <>
      {/* Navbar Principal */}
      <div className="navbar">
        <div className="navbar-left">
          <button className="home-icon" onClick={() => history.push('/dashboard')}>
            <IonIcon icon={homeOutline} />
          </button>
        </div>
        <div className="navbar-center">
          <h1>E.N.YSICS</h1>
        </div>
        <div className="navbar-right">
          <button className="user-icon">
            <IonIcon icon={personCircleOutline} />
          </button>
        </div>
        {/* Stelele animate */}
        <div className="stars"></div>
        {/* Planetele animate */}
        <div className="planets"></div>
      </div>

      {/* Navbar Secundar */}
      <div className="navbar-secondary">
        <button onClick={() => history.push('/mechanics')}>Mechanics</button>
        <button onClick={() => history.push('/thermodynamics')}>Thermodynamics</button>
        <button onClick={() => history.push('/electricity')}>Electricity</button>
        <button onClick={() => history.push('/optics')}>Optics</button>
        <button onClick={() => history.push('/electromagnetism')}>Electromagnetism</button>
        <button onClick={() => history.push('/oscillations')}>Oscillations</button>
      </div>
    </>
  );
};

export default Navbar;
