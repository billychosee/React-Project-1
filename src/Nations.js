import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';  

function Nations(props) {  
  return (  
    <div className="flex flex-col items-start mx-4 mt-20 md:flex-row md:py-5 md:mx-20 lg:ml-40 ">   
      <img src={props.image} alt={props.countryName} className="object-cover w-full h-auto mb-4 rounded-lg md:mb-0 md:w-2/5 lg:w-1/4" />   
      <div className="ml-0 md:ml-4 md:w-1/2">   
        <div className='flex items-center mt-2 md:mt-5'>   
          <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2 text-2xl text-red-600' />  
          <h2 className='text-xl font-medium md:text-2xl'>{props.countryName}</h2>  
          <p className="ml-2 text-xl text-blue-500 underline cursor-pointer md:ml-10 md:text-sm lg:text-2xl">  
            View On Google Maps  
          </p>  
        </div>   
        <h1 className='font-bold md:text-3xl lg:text-5xl '>{props.place}</h1>  
        <p className='mt-2 font-medium md:mt-10 md:text-xl lg:text-2xl'>{props.dates}</p>  
        <p className='mt-2 md:mt-4 md:text-base lg:text-2xl '>{props.content}</p>  
      </div>  
    </div>  
  );  
}  

export default Nations;