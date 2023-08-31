"use client";
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(a => a + 1);
  }

  function double() {
    setNumber(a => a*2);
  }

  return (
      <div className='flex flex-col items-center justify-center w-full p-10 rounded-xl outline-double outline-zinc-300'>
        <h1 className='font-semibold text-yellow-500 text-7xl'>{number}</h1>
        <p className='pb-2 font-semibold'>Round Total</p>

        <div id="row1-buttons" className='flex-row py-2'>



<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
      }}>+2</button>

            
      <button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
      }}>+4</button>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+5</button>

</div>

<div id="row2-buttons" className='flex-row py-2'>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+6</button>


<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+7</button>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+8</button>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+9</button>
</div>

<div id="row3-buttons" className='flex-row py-2'>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+10</button>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+11</button>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+12</button>

<button className='px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700' onClick={() => {
        double();
      }}>x2</button>



</div>



    </div>
  );
}