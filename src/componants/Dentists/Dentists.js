import React, { useEffect, useState } from 'react';
import Dentist from '../Dentist/Dentist';

const Dentists = () => {
    const [dentists, setDentists] = useState([])
    useEffect(() => {
        fetch('/dentist.JSON')
            .then(res => res.json())
            .then(data => setDentists(data))
    }, [])
    return (
        <div className='container' style={{ marginTop: '70px' }}>
            <h1 className='my-5 text-center' style={{ color: '#242424' }}>Top Dentist</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    dentists.map(dentist => <Dentist key={dentist.id} dentist={dentist}></Dentist>)
                }
            </div>

        </div>
    );
};

export default Dentists;