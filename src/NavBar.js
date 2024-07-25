import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

function NavBar() {  
  return (  
    <div >  
      <nav className='flex items-center justify-center text-center bg-orange-600 p-5'>
        <FontAwesomeIcon icon={faGlobeAsia} className='mr-2 text-white text-3xl' />  
        <p className='text-white text-2xl'>My Travel Journal</p>  
      </nav> 
    </div>  
  );  
}  

export default NavBar;