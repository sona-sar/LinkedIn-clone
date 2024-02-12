import React from 'react'
import './Header.css'
import HeaderOption from "./HeaderOption.js";
import {useDispatch} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";


import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {auth} from "./firebase";
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Header() {

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className = 'header'>
        <div className = "header__left">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt = ""/>
            <div className = "header__search">
                <SearchIcon />
                <input placeholder = "Search" type = "text"/>
            </div>

        </div>
        <div className = "header__right">
            <HeaderOption Icon = {HomeIcon} title = "Home"/>
            <HeaderOption Icon = {SupervisorAccountIcon} title = 'My Network'/>
            <HeaderOption Icon = {BusinessCenterIcon} title = 'Jobs'/>
            <HeaderOption Icon = {ChatIcon} title = 'Messaging'/>
            <HeaderOption Icon = {NotificationsIcon} title = 'Notifications'/>
            <HeaderOption avatar = {true} title = 'me' onClick = {logoutOfApp}/>

        </div>
    </div>

    
  )
}

export default Header
