import { React, useState } from 'react';
import './loading.css';

export function Loading () {
  const [load, setLoad] = useState(0);
  // const loadText = document.querySelector('.loading-text');
  // const bg = document.querySelector('.bg');
  const interval = setTimeout(blurring, 30);
  function blurring () {
    setLoad(load + 10);
    if (load >= 100) {
      console.log(load, 'entraaaaaaaaaaaaaaa');
      return clearInterval(interval);
    };

    // loadText.style.opacity = scale(load, 0, 100, 0, 1);
    // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  };

  // Load goes from 0 to 100, but the range of the opacity is from 0 to 1, scale() is responsible for adapting a range within another range
  // opaity range is from 0 to 1
  // blur range is from 30 to 0

  // function scale (number, inMin, inMax, outMin, outMax) {
  //  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  //  }

  return (
      <div className="bg">
          <div className="loading-text">{load}</div>
      </div>
  );
}
