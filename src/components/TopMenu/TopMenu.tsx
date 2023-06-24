import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import style from './topmenu.module.css'

export const TopMenu = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const day = currentTime.toLocaleString('en-US', { weekday: 'long' });
  const month = currentTime.toLocaleString('en-US', { month: 'long' });
  const date = currentTime.getDate();
  const year = currentTime.getFullYear();


  return (
    <Nav className={`ml-auto ${style.menu_container}`}>
      <div className='me-3'>
        <Nav.Item>
          {day}
        </Nav.Item>
        <Nav.Item>
          {date} {month} {year}
        </Nav.Item>
      </div>
      <div className={style.current_time}>
        <Nav.Item className='current-time'>
          <img className={style.clock_img} src='./img/clock.svg' alt='clock' />
        </Nav.Item>
        <Nav.Item>
          {currentTime.toLocaleTimeString()}
        </Nav.Item>
      </div>
    </Nav>
  )
}
