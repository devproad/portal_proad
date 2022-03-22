import React from 'react'
import './MenuLateral.css'

const MenuLateral = (props) => {
    return (
        <div className='MenuLateral'>
             {props.children}
        </div>
    );
}

export default MenuLateral;