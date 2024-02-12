import React, { useState } from 'react';
import './Login.css'
import {auth} from "./firebase";
import {login} from "./features/userSlice";
import {useDispatch} from "react-redux";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert("Please enter a full name!");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }));
            });
        }).catch(error => alert(error));
    }; 
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }));
        }).catch(error => alert(error));
    };
  return (
    <div className = "login">
        <img  src = "https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2011.png" alt = ""/>
        
        <form>
            <input  value = {name} onChange ={(e) => setName(e.target.value)} type ="text" placeholder = "Full name (required if registering)"/>
            
            <input value = {profilePic} onChange = {(e) => setProfilePic(e.target.value)} type = "text" placeholder='Profile pic URL (optional)'/>

            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder='Email'/>

            <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder='Password'/>

            <button onClick = {loginToApp} type = "submit">Sign In</button>
        </form>

        <p>Not a member?
            <span onClick = {register} className = "login__register"> Register Now</span>
        </p>
    </div>
  )
}

export default Login
