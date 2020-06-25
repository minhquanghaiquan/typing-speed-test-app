import React from "react";
import PropTypes from "prop-types";

Preview.propTypes = {
  text: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired
};

export default function Preview(props) {
  const { text, userInput } = props;

  const texts = text.split("");

  return (
    <div className="border rounded p-3 mb-4">
      {texts.map((s, i) => {
        let color;
        if (i < userInput.length) {
          color = s === userInput[i] ? "#dfffa0" : "#fcbea4";
        }
        return (
          <span key={i} style={{ backgroundColor: color }}>
            {s}
          </span>
        );
      })}
    </div>
  );
}
