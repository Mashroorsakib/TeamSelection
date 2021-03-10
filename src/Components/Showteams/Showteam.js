import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import "./Showteam.css"
import { faPlus} from '@fortawesome/free-solid-svg-icons';
const Showteam = (props) => {
   // console.log(props.teamdata)
    const{strTeam,strSport,strTeamBadge,idTeam}=props.teamdata;
  //  console.log(strTeam)
    return (
          <div className="first">
              <div className="card" style={{width: '18rem'}}>
              <img src={strTeamBadge} className="card-img-top" alt="..."/>
             <div class="card-body">
            <h5 className="card-title">{strTeam}</h5>
             <p className="card-text">{strSport}</p>
            <Link to={`/${idTeam}`}><button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus}/>
                Explore</button></Link>
              
  </div>
</div>
          </div>        
    );
};

export default Showteam;