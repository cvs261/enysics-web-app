import React, { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import './Navbar.css';

const Navbar: React.FC = () => {
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

        // Poziționează steaua random pe ecran
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        // Dimensiune random
        const size = Math.random() * 3 + 1; // Între 1px și 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Viteză random
        const duration = Math.random() * 5 + 5; // Între 5s și 10s
        star.style.animationDuration = `${duration}s`;

        container.appendChild(star);
      }
    }
  };

  const generatePlanets = () => {
    const container = document.querySelector('.planets');
    if (container) {
      for (let i = 0; i < 5; i++) { // Creează 5 planete
        const planet = document.createElement('div');
        planet.classList.add('planet');

        // Poziționează planeta random
        planet.style.left = Math.random() * 100 + '%';
        planet.style.top = Math.random() * 70 + '%'; // Între 0% și 70% pentru a nu acoperi navbar-ul

        // Dimensiune random
        const size = Math.random() * 50 + 20; // Între 20px și 70px
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;

        // Viteză random
        const duration = Math.random() * 20 + 10; // Între 10s și 30s
        planet.style.animationDuration = `${duration}s`;

        container.appendChild(planet);
      }
    }
  };

  return (
    <>
      {/* Navbar Principal */}
      <div className="navbar">
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
        <button>Mechanics</button>
        <button>Thermodynamics</button>
        <button>Electricity</button>
        <button>Optics</button>
        <button>Electromagnetism</button>
        <button>Oscillations</button>
      </div>
    </>
  );
};

export default Navbar;
