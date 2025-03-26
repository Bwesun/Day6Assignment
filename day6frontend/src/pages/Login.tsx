import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonPage, IonContent, IonAlert, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { auth, signInWithEmailAndPassword } from '../firebaseConfig';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding login-content">
                <IonCard className="login-card">
                    <IonCardHeader>
                        <IonCardTitle className="login-title">Login</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <form onSubmit={handleLogin} className="login-form">
                            <IonItem className="input-item">
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput 
                                    type="email" 
                                    value={email} 
                                    onIonChange={(e) => setEmail(e.detail.value!)} 
                                    required
                                />
                            </IonItem>
                            <IonItem className="input-item">
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput 
                                    type="password" 
                                    value={password} 
                                    onIonChange={(e) => setPassword(e.detail.value!)} 
                                    required
                                />
                            </IonItem>
                            <IonButton expand="full" type="submit" className="login-button">Login</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
                {error && (
                    <IonAlert
                        isOpen={!!error}
                        onDidDismiss={() => setError('')}
                        header="Login Error"
                        message={error}
                        buttons={['OK']}
                    />
                )}
            </IonContent>
        </IonPage>
    );
};

export default Login;
