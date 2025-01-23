import React, { useState } from 'react';
import { solveMechanics } from '../api/mechanicsService'; // Importă funcția din API

const MechanicsCalculator: React.FC = () => {
  const [mass, setMass] = useState('');
  const [force, setForce] = useState('');
  const [angle, setAngle] = useState('');
  const [result, setResult] = useState('');
  const [graph, setGraph] = useState('');

  const handleCalculate = async () => {
    try {
      const data = await solveMechanics(parseFloat(mass), parseFloat(force), parseFloat(angle));
      setResult(data.steps);
      setGraph(data.graph);
    } catch (error: any) {
      console.error(error);
      setResult(error.message);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#000', color: '#fff' }}>
      <h1>Mechanics Calculator</h1>
      <div>
        <label>Mass (kg): </label>
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <label>Force (N): </label>
        <input
          type="number"
          value={force}
          onChange={(e) => setForce(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <label>Angle (°): </label>
        <input
          type="number"
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f54d48', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Calculate
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>Calculation Steps:</h2>
          <p>{result}</p>
        </div>
      )}

      {graph && (
        <div style={{ marginTop: '20px' }}>
          <h2>Graph:</h2>
          <img src={graph} alt="Mechanics Graph" />
        </div>
      )}
    </div>
  );
};

export default MechanicsCalculator;
