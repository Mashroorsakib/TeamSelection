import React, { useEffect, useState } from 'react';
import "./Home.css"
import Showteam from '../Showteams/Showteam';
import image from "../Image/src.png"

const Home = () => {
   const[loaddata,setdata]= useState([])
   useEffect(()=>{
   const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
   fetch(url)
   .then(res=>res.json())
   .then(data=>{
       setdata(data.teams)
   })
   },[])
    return (
        <div>
          <div className="first-container">
               <h1>Team Tracker</h1>
          </div>
          <div className="container">
          {
              loaddata.map(data=> <Showteam teamdata={data}></Showteam>)
          }
          </div>
        </div>
    );
};

export default Home;  