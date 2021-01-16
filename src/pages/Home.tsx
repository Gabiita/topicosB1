import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import AuthContext from '../context/AuthContext';
import Chat from './Chat';
import './Home.css';

const Home: React.FC = () => {
  const {currentUser} = useContext(AuthContext);


  if(currentUser!=""){
      return <Chat/>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chat App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
