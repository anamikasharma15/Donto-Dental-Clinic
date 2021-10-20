import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {detailId } = useParams();
    const [eachDetail, setEachDetail] = useState([])
    useEffect (()=>{
        fetch ('/services.JSON')
        .then (res => res.json())
        .then (data => {setEachDetail(data)})
    },[])

const exact = eachDetail.find(td => td.key === detailId)
    return (
        <div>
            <img src={exact?.img} alt="" />
            <h1>{exact?.name}</h1>
        </div>
    );
};

export default ServiceDetails;