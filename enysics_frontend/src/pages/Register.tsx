import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { register } from '../api/authService'; // Importă funcția register
import './Register.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const data = await register(username, email, password);

      // Salvează token-ul în localStorage (opțional)
      localStorage.setItem('token', data.token);

      alert('Account created successfully!');
      history.push('/login'); // Redirecționează utilizatorul către login
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="background">
          <div className="earth-animation-register"></div>
          <div className="form-container">
            <h2>Register</h2>
            <IonInput
              placeholder="Username"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
            <IonInput
              placeholder="Email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
            <IonInput
              placeholder="Password"
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonInput
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onIonChange={(e) => setConfirmPassword(e.detail.value!)}
            />
            <IonButton expand="block" onClick={handleRegister}>
              Register
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
