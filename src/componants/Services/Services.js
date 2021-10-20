import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [details, setdetails] = useState([])
    useEffect (()=>{
        fetch ('/services.JSON')
        .then (res => res.json())
        .then (data => setdetails(data))
    },[])
    return (
        
        <div className="mt-5">
            {/* <h1>{details.length}</h1> */}
            <h2 className="heading py-2 text-primary ps-4 text-center">Our Popular Treatments</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
        {

            details.map(detail=><Service key ={detail.key} detail={detail}></Service>)
        }
</div>
</div>
    
    );
};

export default Services;