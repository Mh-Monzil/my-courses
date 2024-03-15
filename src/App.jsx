import React from 'react';
import Courses from './Components/Courses';
import Cart from './Components/Cart';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <h1 className='text-5xl font-semibold text-center py-6'>Course Registration</h1>

      <div className='flex gap-5'>
        <div className="w-3/4">
          <Courses></Courses>
        </div>
        <div className='w-1/4'>
          <Cart></Cart>
        </div>
      </div>
      
    </div>
  );
};

export default App;