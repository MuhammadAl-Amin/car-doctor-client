import React, { useEffect, useState } from 'react'
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then ( data => setServices(data))
    }, []);

    console.log(services)
  return (
    <div>
            <div className='space-y-5 mt-[11rem]'>
        <p className='text-xl font-bold text-[#FF3811] text-center'>Service</p>
        <p className='text-5xl font-bold text-center'>Our Service Area</p>
        <p className='text-base font-normal text-[#737373] w-1/2 text-center mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            services.map(service => <ServicesCard key={service.service_id} service={service}></ServicesCard>)
        }
    </div>
    </div>
  )
}

export default Services