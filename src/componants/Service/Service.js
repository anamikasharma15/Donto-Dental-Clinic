import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {key,name,img,description} = props.detail;
    return (
        <div>
        <div className="col">
        <div className="card  style={{ width: '20rem', height: '30rem' }}
        h-100">
      <img src={img} style={{height:'300px',width:'430px'}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/detail/${key}`}><button>Details</button></Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Service;
