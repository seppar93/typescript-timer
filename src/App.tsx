import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [secounds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('12/21/2022 23:59:59')
    const interval = setInterval(() => {
      const now = new Date()

      const difference = target.getTime() - now.getTime()
      const d = Math.floor(difference/(1000 * 60 *60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60 )) / (1000 *60))

      setMinutes(m)
      const s = Math.floor((difference % (1000 * 60)) /1000)
      setSeconds(s)

    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='App'>
      <div className='timer-wrapper'>DAYS {days}</div>
    </div>
  );
}

export default App;
