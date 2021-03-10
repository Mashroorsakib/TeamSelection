import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Teamdetail.css"
import fb from "../Image/Icon/Facebook.png"
import twtr from "../Image/Icon/Twitter.png"
import ytb from   "../Image/Icon/YouTube.png"
const Teamdetail = () => {
    const{teamid}=useParams();
    const[team,setteamdata]=useState([])
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamid}`
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setteamdata(data.teams[0])
        })
    },[])
    console.log(team)
    let image=null;
    const {strTeamBadge,strDescriptionEN,strCountry,strGender,strSport,strTwitter,strYoutube,strFacebook,strLeague,strTeam,strTeamFanart3}=team
      if(strGender&& strGender.toLowerCase() === 'male'){
         image=strTeamFanart3;
      }
      else{
          image=strTeamBadge;
      }
     return (
        <div className="main">
            <div className="image-container">
                <img src={strTeamBadge} alt=""/>
            </div>
            <div className="second-container">
                <div className="first-style">
                       <h1>{strTeam}</h1>
                       <p>Country: {strCountry}</p>
                       <p>Leauge title: {strLeague}</p>
                       <p>SportsType: {strSport}</p>
                       <p>Gender: {strGender}</p>
                </div>
                <div className="second-style">
                    <img src={image} alt=""/>
                </div>
                </div>
                <div className="description">
                      <p>{strDescriptionEN}</p>
                  </div>
                  <div className="social">
                    <a href={"https:/"+ strFacebook}> <img src={fb} alt="/nothing found"></img> </a>
                    <a href={"https://"+ strTwitter}> <img src={twtr} alt="/nothing found"></img> </a>
                    <a href={"https://"+strYoutube}> <img src={ytb} alt="/nothing found"></img> </a>
                  </div>
        </div>
    );
};

export default Teamdetail;