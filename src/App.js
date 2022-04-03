import React, {useState} from 'react';
import './App.css';

import Header from './components/header/Header';
import Post from './components/posts/Post';
import Chat from './components/chat/Chat';




function App() {
  const [posts, setPosts] = useState([
    {
      username: "KaySan" ,
      imageUrl: "https://images8.alphacoders.com/702/702116.jpg" ,
      caption: "I am playing Arjuna"
    },
    {
      username: "ProWin",
      imageUrl: "https://i.pinimg.com/originals/3e/2a/f6/3e2af664e061013a3d05aa99fa20c1d4.jpg",
      caption: "I am playing Nakul"
    },
    {
      username: "Addy",
      imageUrl: "https://i.pinimg.com/736x/60/6f/65/606f656ca6b1998a3930cab67dea556e.jpg",
      caption: "I am playing Yuddhisthir"
    },
    {
      username: "Pratim",
      imageUrl: "https://thumbs.dreamstime.com/b/silhouette-man-standing-top-mountain-watching-sun-rise-fog-aerial-view-silhouette-man-standing-top-145235009.jpg",
      caption: "I am playing Bheem"
    },
    {
      username: "Sayantan",
      imageUrl: "https://i.pinimg.com/originals/9a/3b/ef/9a3bef2922fc7f43b69bdc63c603a9d0.jpg",
      caption: "I am playing Sahdev"
    }
  ]);
  return (
    <div className="app">
     
     <Header /> 

      <div className="app_body">
          <div >
            {
              posts.map(post =>(
              <Post username={post.username} imageUrl={post.imageUrl} caption={post.caption}/>
              )
            )
            }
          </div>
          
          <div>
            <Chat/>
          </div>
      </div>
        
      
     
     
     
    </div>
  );
}

export default App;
