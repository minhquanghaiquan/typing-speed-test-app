import React from "react";
import PropTypes from "prop-types";

Speed.propTypes = {
  symbols: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired
};

export default function Speed(props) {
  const { symbols, sec } = props;
  if (symbols !== 0 && sec !== 0) {
    const wpm = symbols / 5 / (sec / 60);
    return <div>{Math.round(wpm)} wpm</div>;
  }
  return <div> 0 wpm</div>;
}
