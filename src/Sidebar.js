import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className = "sidebar__recentItems">
            <span className = "sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className = "sidebar">
        <div className = "sidebar__top">
            <img src = "https://wallpapercave.com/wp/wp3989571.jpg"/>
            <Avatar className = "sidebar__avatar" src = {user.photoUrl}>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className = "sidebar__stats">
            <div className = "sidebar__stat">
                <p>Who viewed you</p>
                <p className = "sidebar__statNumber">
                    212
                </p>
            </div>
            <div className = "sidebar__stat">
                <p>Views on post</p>
                <p className = "sidebar__statNumber">
                    1231
                </p>
            </div>
        </div>

        <div className = "sidebar__bottom">
            <p>Recent</p>
            {recentItem('react.js')}
            {recentItem('programming')}
            {recentItem('js-design')}


        </div>
    </div>
  )
}

export default Sidebar
