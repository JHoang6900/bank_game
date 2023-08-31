"use client";
import { useState } from 'react';

export default function Counter() {
  
const playersArray = [];

// const listItems = playersArray.map((players) =>
//   <li>hi</li>
// );

  function increment() {
    setNumber(a => a + 1);
  }

  function double() {
    setNumber(a => a*2);
  }

  return (
      <div className='flex flex-col items-center justify-center w-full p-10 mt-5 rounded-xl outline-double outline-zinc-300'>
        <h1>PLAYERS: </h1>
        <p>Jeppy</p>
        <p>Pipoxy</p>
        <p>Jaden</p>
        



    </div>
  );
}