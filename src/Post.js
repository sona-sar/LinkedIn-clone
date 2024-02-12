import React, {useState, forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from "./InputOption"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const Post = forwardRef(({name, description, message, photoUrl}, ref ) =>{
  // Function to toggle the liked state
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked); // Toggle the state
  };

  return (
    <div ref = {ref} className = "post">
        <div className = "post__header">
            <Avatar src = {photoUrl}>{name[0]}</Avatar>
            <div className = "post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        

        <div className = "post__body">
            <p>{message}</p>
        </div>

        <div className = "post__buttons">
            <InputOption Icon ={liked ? ThumbUpAltIcon : ThumbUpOffAltIcon} onClick={toggleLike} title = "Like" color = "gray"/>
            <InputOption Icon = {ChatIcon} title = "Like" color = "gray"/>
            <InputOption Icon = {ShareIcon} title = "Comment" color = "gray"/>
            <InputOption Icon = {SendIcon} title = "Share" color = "Send"/>
        </div>
    </div>
  )
})

export default Post
