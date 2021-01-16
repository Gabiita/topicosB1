import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCoJeSs5JvGsWsdVnOwWMUlvWdnTFzExFw",
    authDomain: "chat-b1-gaby.firebaseapp.com",
    databaseURL: "https://chat-b1-gaby-default-rtdb.firebaseio.com",
    projectId: "chat-b1-gaby",
    storageBucket: "chat-b1-gaby.appspot.com",
    messagingSenderId: "13719931857",
    appId: "1:13719931857:web:c31a8998aee62f4d4a6ef0",
    measurementId: "G-NQZCQZHJMZ"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const getCurrentUser = () =>{
    return firebase.auth().currentUser
}

export const authentication = async (email: string, pass: string) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email,pass); 
        console.log(response); 
        return true;
    } catch (error) {
        console.log(error)
        return false;         
    }
}


export default firebase;