import React from 'react';
import { Link } from 'react-router-dom';
import './Dentist.css'

const Dentist = (props) => {
    const { name, designation, img, key ,price } = props.dentist;
    return (
        <div>
            <div className="col">
                <div className="card card-design h-100  style={{ width: '20rem', height: '30rem' }}>">
                    <img src={img} style={{height:'250px',width:'355px'}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h2 className="">{price}</h2>
                        <p className="card-text">{designation}</p>

                         <div className='button-style'>
                            <Link to={`/details/${key}`}>
                                <div className="d-grid gap-2 ">
                                    <button className="btn btn-design" type="button">Visit Profile</button>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dentist;