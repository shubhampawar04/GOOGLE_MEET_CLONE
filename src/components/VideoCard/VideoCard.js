
import React from 'react';
import "./VideoCard.css"
import Shubham from "../../assets/1707758181035.jpg"
import SurajSir from "../../assets/suraj.png";
import OnMic from "../../assets/on-mic.png"
import OffMic from "../../assets/off-mic.png"



const VideoCard = () => {

  return (
    <div className="video-grid">
      <div className="video-tile">
        <img src={Shubham} className='profile-img'/>
       <img src={OffMic} className='mic-img'/>
       <span className='students-name'>Shubham ❤️</span>
       
      </div>
      <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=32' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Sakshi 🩷</span>
      </div>
      <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=27' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Smita 🧡</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=47' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Kirti 💛</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=33' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Vishal 💜</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=52' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Rutik 💝</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=7' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Dhiraj 💕</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=55' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Sangram 🩵</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=54' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Saurav 🤍</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=56' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Akash ❤️‍🩹</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/400?img=44' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Nisha ❣️</span>
      </div>
         <div className="video-tile">
        <img src={SurajSir} className='profile-img'/>
        <img src={OnMic} className='mic-img'/>
        <span className='students-name'>Suraj Sir 💟</span>
      </div>
    </div>
  );
};

export default VideoCard;
