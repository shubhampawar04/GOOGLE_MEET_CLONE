
import React from 'react';
import "./VideoCard.css"
import Shubham from "../../assets/1707758181035.jpg"
import sakshi from "../../assets/sakshi.jpeg"
import smita from "../../assets/smita.jpeg"
import kirti from "../../assets/kirti.jpeg"
import vishal from "../../assets/vishal.jpeg"
import rutik from "../../assets/rutik.jpeg"
import dhiraj from "../../assets/dhiraj.jpeg"
import sangram from "../../assets/sangram.jpeg"
import saurav from "../../assets/saurav.jpeg"
import akash from "../../assets/akash.jpeg"
import nisha from "../../assets/nisha.jpeg"
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
        <img src= {sakshi} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Sakshi 🩷</span>
      </div>
      <div className="video-tile">
        <img src= {smita} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Smita 🧡</span>
      </div>
         <div className="video-tile">
        <img src= {kirti} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Kirti 💛</span>
      </div>
         <div className="video-tile">
        <img src= {vishal} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Vishal 💜</span>
      </div>
         <div className="video-tile">
        <img src= {rutik} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Rutik 💝</span>
      </div>
         <div className="video-tile">
        <img src= {dhiraj} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Dhiraj 💕</span>
      </div>
         <div className="video-tile">
        <img src= {sangram} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Sangram 🩵</span>
      </div>
         <div className="video-tile">
        <img src= {saurav} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Saurav 🤍</span>
      </div>
         <div className="video-tile">
        <img src= {akash} className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Akash ❤️‍🩹</span>
      </div>
         <div className="video-tile">
        <img src= {nisha} className='profile-img'/>
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
