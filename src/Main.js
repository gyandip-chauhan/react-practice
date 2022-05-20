import React, { useCallback, useEffect, useState } from 'react';
import { LoginControl }  from './LoginControl';

export function Main() {
  const [date, setDate] = useState(new Date());
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [timerID, setTimerID] = useState('');

  const componentDidMount = (e) => {
    this.triggerInterval()
  }

  const triggerInterval = (e) => {
    let timerIDVal = setInterval(() => this.tick(), 1000 );
    setTimerID(timerIDVal)
  }

  const componentWillUnmount = (e) => {
    clearInterval(timerID);
  }

  const handleClick = (e) => {

    setIsToggleOn(!isToggleOn)

    if (timerID){
      clearInterval(timerID);
      setTimerID("")
    } else {
      triggerInterval()
    }
  }

  const tick = (e) => {
    setDate(new Date());
  }

  return (
    <div className="mainDiv">
      <button onClick={handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
      <p> It is time {date.toLocaleTimeString()} </p>
      <LoginControl />
    </div>
  );
}
