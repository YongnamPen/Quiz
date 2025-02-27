import React from "react";

export const AnswerEmoji = ({
  emojiId,
  emojiText,
  emojiChange,
  isChecked,
  emojiImg,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant"
        id={emojiId}
        onChange={emojiChange}
        checked={isChecked}
      />
      <label htmlFor={emojiId}>
        <img src={emojiImg} alt={emojiText} />
        <p>{emojiText}</p>
      </label>
    </li>
  );
};
