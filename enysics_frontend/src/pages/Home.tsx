import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="background">
          <div className="earth-animation"></div>
          <div className="content">
            <h1>Welcome to Enysics</h1>
            <IonButton color="light" routerLink="/login">
              Login
            </IonButton>
            <IonButton color="light" routerLink="/register" style={{ marginLeft: '10px' }}>
              Register
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
