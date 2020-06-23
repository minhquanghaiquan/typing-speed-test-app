import React from "react";

export default function Speed(props) {
  if (props.symbols !== 0 && props.sec !== 0) {
    const wpm = props.symbols / 5 / (props.sec / 60);
    return <div>{Math.round(wpm)} wpm</div>;
  }
  return <div> 0 wpm</div>;
}
