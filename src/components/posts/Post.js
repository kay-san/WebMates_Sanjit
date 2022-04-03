import React from 'react';
import './PostStyle.css';
import Avatar from "@material-ui/core/Avatar";


function Post({username, imageUrl, caption}) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar 
        className="post_avatar"
        alt=""
        src="/static/images/avatar/1.jpg"
        />
        
        <h3 className="post_username">{username}</h3>
      </div>


      <img className="post_image" src={imageUrl}
      
      alt=""/>
      
      <div className="post_caption">
        <h3 className="post_username">{username} :
        </h3>
        <h3 className="post_caption_text">{caption}</h3>
      </div>
      
      
      

    </div>
  )
}

export default Post
