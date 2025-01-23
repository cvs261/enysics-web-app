import React, { useEffect } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Dashboard.css';

const physicists = [
  {
    category: 'Mechanics',
    name: 'Isaac Newton',
    summary: `Isaac Newton formulated the laws of motion and universal gravitation, which laid the foundation for classical mechanics. 
      His work, "Philosophiæ Naturalis Principia Mathematica," is considered one of the most influential works in the history of science.`,
    image: 'https://example.com/newton.jpg',
    symbol: '⚙️',
  },
  {
    category: 'Thermodynamics',
    name: 'James Clerk Maxwell',
    summary: `James Clerk Maxwell developed the kinetic theory of gases and significantly advanced the study of thermodynamics. 
      His unification of electricity, magnetism, and optics with Maxwell's equations revolutionized our understanding of electromagnetism.`,
    image: 'https://example.com/maxwell.jpg',
    symbol: '🔥',
  },
  {
    category: 'Electricity',
    name: 'Michael Faraday',
    summary: `Michael Faraday's groundbreaking discoveries in electromagnetic induction and electrolysis laid the groundwork for modern electrical engineering. 
      His experimental techniques and principles are fundamental to our understanding of electricity and magnetism.`,
    image: 'https://example.com/faraday.jpg',
    symbol: '⚡',
  },
  {
    category: 'Optics',
    name: 'Albert Einstein',
    summary: `Albert Einstein explained the photoelectric effect, a discovery that paved the way for quantum mechanics. 
      His theories of relativity transformed our understanding of space, time, and energy.`,
    image: 'https://example.com/einstein.jpg',
    symbol: '🔭',
  },
  {
    category: 'Electromagnetism',
    name: 'James Clerk Maxwell',
    summary: `Maxwell's equations unified the behavior of electric and magnetic fields, forming the basis for modern electromagnetism. 
      His insights also extended to the study of thermodynamics and statistical mechanics.`,
    image: 'https://example.com/maxwell.jpg',
    symbol: '🧲',
  },
  {
    category: 'Oscillations',
    name: 'Galileo Galilei',
    summary: `Galileo studied pendulums and oscillatory motion, pioneering the field of harmonic motion. 
      His work laid the groundwork for classical mechanics and the study of periodic phenomena.`,
    image: 'https://example.com/galileo.jpg',
    symbol: '🔄',
  },
];

const Dashboard: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login'); // Redirect if not authenticated
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Show card when in view
          }
        });
      },
      { threshold: 0.6 } // 60% visibility triggers the animation
    );

    const cards = document.querySelectorAll('.physicist-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [history]);

  return (
    <IonPage>
      <Navbar />
      <IonContent className="dashboard-content">
        <div className="dashboard-container">
          <h1>Welcome to the Dashboard!</h1>
          <p>Explore the most influential physicists in each category:</p>
          <div className="physicist-list">
            {physicists.map((physicist, index) => (
              <div
                key={index}
                className={`physicist-card ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="physicist-symbol">{physicist.symbol}</div>
                <img
                  src={physicist.image}
                  alt={physicist.name}
                  className="physicist-image"
                />
                <h2>{physicist.category}</h2>
                <h3>{physicist.name}</h3>
                <p>{physicist.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
