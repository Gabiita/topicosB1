import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from 'react';
import ChatVentana from '../components/ChatVentana';
import AuthContext from '../context/AuthContext';
const Chat: React.FC = () => {
    const {logout} = useContext(AuthContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat App 
             <IonButton style={{"marginLeft": "55%"}} onClick={logout}>Salir</IonButton>    
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ChatVentana/>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
