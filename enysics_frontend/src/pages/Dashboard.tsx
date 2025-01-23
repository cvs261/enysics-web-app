import React, {useEffect} from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard: React.FC = () => {
    const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login'); // Redirecționează utilizatorul dacă nu este autentificat
    }
  }, [history]);

  return (
    <IonPage>
      <Navbar />
      <IonContent className="dashboard-content" style={{ marginTop: '60px' }}>
        <div style={{ padding: '20px' }}>
          <h1>Welcome to the Dashboard!</h1>
          <p>Scroll down to see the sticky navbar in action.</p>
          <div style={{ height: '2000px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
