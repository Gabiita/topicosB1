import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonRow, IonTextarea } from '@ionic/react';
import { Hash } from 'crypto';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../Firebase';

const ChatVentana: React.FC = () => {
    const [text, setText] = useState<string>();
    const [mensajes, setMensajes] = useState<any>([]); 
    const [imagen, setImagen] = useState<any>(null);
    const [carga, setCarga] = useState(0); 
    useEffect(()=> {
        console.log(getCurrentUser());
        const chatsRef = firebase.database().ref('chats');
        chatsRef.on('value', (snapshot) => {
          const chats = snapshot.val();
          const chatsList = [];
          for (let id in chats) {
            chatsList.push({ id, ...chats[id] });
          }
          setMensajes(chatsList);
          console.log(chatsList);
        });
    }, [])


    const encriptarMensaje = () => {
        let hash;
        if(text){
            hash = btoa(text);
            return hash; 
        }
    }
    

    const enviarMensaje = () => { 
        const chatRef = firebase.database().ref('chats');
        const mensaje = {
          usuario: localStorage.getItem('currentUser'),
          texto: encriptarMensaje()
        };
        chatRef.push(mensaje);
    };

    const subir = (e:any) => {
        const imagen = e.target.files[0];
        const storageRef = firebase.storage().ref(`/fotos/${imagen.name}`)
        const cargar = storageRef.put(imagen);
        cargar.on('state_changed', snapshot => {
            let porcentaje = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            setCarga(porcentaje); 
        }, error  => {
            console.log(error.message); 
        },() => {
            setCarga(100);
            setImagen(cargar.snapshot.downloadURL);
            console.log(imagen);
        });
    }

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
        {mensajes? 
             mensajes.map((mensaje:any, index:any)=> (
                <IonCard key={index}>
                <IonCardHeader>
                  <IonCardTitle>{atob(mensaje.texto)}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{mensaje.usuario}</IonCardContent>
              </IonCard>
            )):
            <p>Nuevo</p>
        }
        </IonCol>
    </IonRow>
    <IonRow>
        <IonCol size="10">
            <IonItem>
            <IonTextarea placeholder="Escriba su mensaje" value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            </IonItem>
        </IonCol>
        <IonCol size="1">
            <IonButton color="success" onClick={enviarMensaje}> 
                <h1>{'>'}</h1>
            </IonButton> 
        </IonCol>
        </IonRow>
        <progress value={carga} max="100"></progress>
        <input width="600" type="file" onChange={subir} />
        <img src={imagen}/>
      </IonGrid>
  );
};

export default ChatVentana;
