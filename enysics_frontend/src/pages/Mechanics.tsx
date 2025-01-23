import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { solveMechanics } from '../api/mechanicsService';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Mechanics.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Mechanics: React.FC = () => {
  const [mass, setMass] = useState('');
  const [force, setForce] = useState('');
  const [steps, setSteps] = useState('');
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    setError('');
    setSteps('');
    setChartData(null);

    if (!mass || !force || parseFloat(mass) <= 0) {
      setError('Please enter valid values for mass and force.');
      return;
    }

    try {
      const result = await solveMechanics(parseFloat(mass), parseFloat(force));
      setSteps(result.steps);

      const labels = result.data_points.map((dp: any) => dp.force);
      const data = result.data_points.map((dp: any) => dp.acceleration);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Force vs Acceleration',
            data,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
          },
        ],
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="mechanics-page">
      <Navbar />
      <div className="mechanics-content">
        <h1>Mechanics</h1>
        <div className="calculator">
          <div className="input-group">
            <label>Mass (kg):</label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              placeholder="Enter mass"
            />
          </div>
          <div className="input-group">
            <label>Force (N):</label>
            <input
              type="number"
              value={force}
              onChange={(e) => setForce(e.target.value)}
              placeholder="Enter force"
            />
          </div>
          <button onClick={handleCalculate}>Calculate</button>
        </div>

        {error && <p className="error">{error}</p>}
        {steps && <p>{steps}</p>}
        {chartData && (
          <div className="chart-container">
            <Line data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mechanics;
