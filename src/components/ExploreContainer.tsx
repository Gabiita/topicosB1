import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonRow } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import './ExploreContainer.css';
import { authentication, getCurrentUser } from '../Firebase';
import AuthContext from '../context/AuthContext';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>(''); 
  const {login} = useContext(AuthContext); 
  return (
    <div className="container">
      <IonGrid>
      <IonRow>
        <IonCol>
        <IonItem>
            <IonInput value={email} placeholder="Ingrese su correo" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={pass} placeholder="Ingrese su contraseña" onIonChange={e => setPass(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton onClick={() => login(email, pass)} color="primary">Acceder</IonButton>
        </IonCol>
        
      </IonRow>
      </IonGrid>
    </div>
  );
};

export default ExploreContainer;
