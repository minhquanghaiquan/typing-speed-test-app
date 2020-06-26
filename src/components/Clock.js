import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../clock-styles.css";



export default function Clock(props) {
  const {time , title} = props

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">{title}</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">You Can do in</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };


  return (
    <div className="App">
        <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={time}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [false, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}