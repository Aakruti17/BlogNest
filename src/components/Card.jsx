import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    
<div className="card" >
  <img src={props.Image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.describe}</p>
    <Link to={props.link} className='btn btn-primary'>read more</Link>
  </div>
</div>
    
  );
}
