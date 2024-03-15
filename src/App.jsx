import React, { useState } from 'react';
import Courses from './Components/Courses';
import Cart from './Components/Cart';

const App = () => {

  const [cart, setCart] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (course) => {
    const isExist = cart.find(c => c.id == course.id);
    if(!isExist) {
      if(remainingCredit-course.credit >= 0){
        const newCart = [...cart, course];
        setCart(newCart);

        setRemainingCredit(remainingCredit - course.credit);
        setTotalCredit(totalCredit + course.credit);
        setTotalPrice(totalPrice + course.price);
      }
      else{
        alert(`you have taken credit of ${totalCredit} hour `)
      }
    }
    else{
      alert("This course already added to cart")
    }
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
      <h1 className='text-5xl font-semibold text-center py-6'>Course Registration</h1>

      <div className='flex gap-5'>
        <div className="w-3/4">
          <Courses addToCart={addToCart}></Courses>
        </div>
        <div className='w-1/4'>
          <Cart cart={cart} 
          remainingCredit={remainingCredit}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
          ></Cart>
        </div>
      </div>
      
    </div>
  );
};

export default App;