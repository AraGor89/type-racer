import React, { useEffect } from "react";
import style from "./common.module.scss";

let interval;

const Timer = ({
  incrementTime,
  resetTime,
  quote,
  typingField,
  speed,
  time,
}) => {
  let checkEquality = typingField === quote;
  useEffect(() => {
    interval = setInterval(() => incrementTime(), 1000);
  }, [quote, checkEquality]);

  useEffect(() => {
    resetTime();
    clearInterval(interval);
  }, [checkEquality]);

  return (
    <div className={style.timer}>
      <span className={style.time}>{time}</span>
      <span className={style.timing}>
        Your typing speed was <span className={style.speed}>{speed}</span>
        seconds per word
      </span>
    </div>
  );
};
export default Timer;
