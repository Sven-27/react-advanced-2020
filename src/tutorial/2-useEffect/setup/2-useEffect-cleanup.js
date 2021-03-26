import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

const checkSize = () => {
  setSize(window.innerWidth)
}

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return  ()=> {
      //clean up eventlistener is also good for toggling between pages
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  },[]) //this works when you stay on page.
  console.log(size)
  return <>
  <h1>window</h1>
  <h2>{size} PX</h2>
  </>;
};

export default UseEffectCleanup;
