import React from "react";

export const AnswerItem = ({ answerText, answerId, answerValue, answerChange, isChecked }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant-1"
        id={answerId}
        value={answerValue}
        onChange={answerChange}
        checked={isChecked}
      />
      <label htmlFor={answerId}>{answerText}</label>
    </li>
  );
};
