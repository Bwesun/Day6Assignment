// src/pages/Home.tsx
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';



const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding home-content">
      <h2>Welcome to Bootcamp!</h2>
      <p>Navigate to the Form tab to submit your info.</p>
    </IonContent>
  </IonPage>
);

export default Home;