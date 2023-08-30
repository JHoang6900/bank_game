"use client";
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(a => a + 1);
  }

  return (
      <div className='flex flex-col items-center justify-center w-full font-semibold'>
        <h1>Number: {number}</h1>

        <div className='flex-row py-2'>
      <button className='px-4 py-2 mr-2 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button className='px-4 py-2 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
      }}>+1</button>

</div>
    </div>
  );
}