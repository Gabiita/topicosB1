import React,{useState, useEffect} from 'react';
import { authentication, getCurrentUser } from '../Firebase';

const AuthContext = React.createContext();
 export const AuthContextProvider = ({children}) => {
     const[currentUser, setCurrentUser] = useState('');
    
     useEffect(() => {
        console.log(localStorage.getItem('currentUser'));     
        if(localStorage.getItem('currentUser')!= ""){
            setCurrentUser(localStorage.getItem('currentUser'));
        }
     }, []);


     const login = async (email, pass) => {
        console.log('maaaail');
        const response = await authentication(email, pass);
        var user = getCurrentUser();
        if (user != null) {
        user.providerData.forEach(function (profile) {     
            console.log("  Provider-specific UID: " + profile.uid);
            
            localStorage.setItem('currentUser', profile.uid)
            setCurrentUser(localStorage.getItem('currentUser'))
            });
        }
     }
     
     const logout = () => {
         
         //localStorage.clear();
         localStorage.setItem('currentUser', '');
         setCurrentUser(localStorage.getItem('currentUser'));
         console.log('salir');
     }
     
     
    return (
        <AuthContext.Provider value={{currentUser:localStorage.getItem('currentUser'), login: login, logout: logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext; 