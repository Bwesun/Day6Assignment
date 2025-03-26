import React from "react";
import { IonApp, IonContent, IonHeader,IonToolbar, IonTitle, IonFooter, IonTabBar, IonTabs, IonTabButton, IonRouterOutlet, IonIcon, IonLabel} from "@ionic/react";
import { personAdd } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import '@ionic/react/css/core.css';
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App: React.FC = () => (
  <IonApp>
    <IonContent className="ion-padding" style={{ '--background': '#adf8e6' }}> {/* Light blue background */}\
      <Home />
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/login" component={Login} exact />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="login" href="/login">
              <IonIcon icon={personAdd} />
              <IonLabel>Signup</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonTitle>
          <p>Day 6 Assignment</p>
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  </IonApp>
);

export default App;