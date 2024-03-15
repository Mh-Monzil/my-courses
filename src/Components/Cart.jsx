import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Cart = ({cart, remainingCredit, totalCredit, totalPrice}) => {
    console.log(cart);
    const {name, price, photo, description, credit} = cart;
    
    


    return (
        <div className='h-96 bg-white rounded-2xl p-6 text-black'>
            <p className='text-info text-xl font-semibold text-center border-b-2 border-gray-300 pb-4'>Credit Hour Remaining {remainingCredit} hr</p>
            <p className='text-xl font-bold py-4'>Course Name</p>
            <div>
                {

                }   
            </div>
            <p className='text-xl font-medium border-t-2 border-gray-300 py-3'>Total Credit Hour : {totalCredit}</p>
            <p className='text-xl font-medium border-t-2 border-gray-300 py-3'>Total Price : {totalPrice} USD</p>
        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.object.isRequired,
    remainingCredit : PropTypes.useState,
    totalCredit : PropTypes.useState,
    totalPrice : PropTypes.useState
}

export default Cart;