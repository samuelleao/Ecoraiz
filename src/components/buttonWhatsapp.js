import React from 'react';
import '../styles/components/buttonWhatsapp.css';
import { FaWhatsapp }  from 'react-icons/fa'

function ButtonWhatsapp(){
    return(
        <button className='buttonWpp'>
            Falar no whatsapp
            <FaWhatsapp size={20} className='ml-2' />    
        </button>
    );
}

export default ButtonWhatsapp;