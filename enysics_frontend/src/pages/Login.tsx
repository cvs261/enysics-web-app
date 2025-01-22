import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login details:', { username, password });
  };

  return (
    <IonPage>
      <IonContent>
        <div className="background">
          <div className="earth-animation-login"></div>
          <div className="form-container">
            <h2>Login</h2>
            <IonInput
              placeholder="Username"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              placeholder="Password"
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonButton expand="block" onClick={handleLogin}>
              Login
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
