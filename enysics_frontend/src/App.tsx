import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Mechanics from './pages/Mechanics';
import Thermodynamics from './pages/Thermodynamics';
import Electricity from './pages/Electricity';
import Optics from './pages/Optics';
import Electromagnetism from './pages/Electromagnetism';
import Oscillations from './pages/Oscillations';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <div className="app-wrapper">
        <IonRouterOutlet>
          {/* Ruta pentru Home */}
          <Route exact path="/home">
            <Home/>
          </Route>

          {/* Ruta pentru Login */}
          <Route exact path="/login">
            <Login/>
          </Route>

          {/* Ruta pentru Register */}
          <Route exact path="/register">
            <Register/>
          </Route>

          {/* Redirect pentru root */}
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>

          {/* Ruta pentru Dashboard*/}
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          {/* Ruta pentru Mechanics */}
          <Route exact path="/mechanics">
            <Mechanics/>
          </Route>
          {/* Ruta pentru Thermodynamics */}
          <Route exact path="/thermodynamics">
            <Thermodynamics />
          </Route>
          {/* Ruta pentru Electricity */}
          <Route exact path="/electricity">
            <Electricity />
          </Route>
          {/* Ruta pentru optics */}
          <Route exact path="/optics">
            <Optics />
          </Route>
          {/* Ruta pentru Electromagnetism */}
          <Route exact path="/electromagnetism">
            <Electromagnetism />
          </Route>
          {/* Ruta pentru Oscillations */}
          <Route exact path="/oscillations">
            <Oscillations />
          </Route>
        </IonRouterOutlet>
      </div>
    </IonReactRouter>
  </IonApp>
);

export default App;
