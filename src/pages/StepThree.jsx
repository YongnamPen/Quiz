import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AnswerEmoji } from "../components/AnswerEmoji";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";

const StepThree = () => {
  const navigate = useNavigate();
  const [selectEmoji, setSelectEmoji] = useState("");

  const emoji = [
    {
      id: "variant-1",
      img: "./img/laugh.png",
      text: "Веселый",
    },
    {
      id: "variant-2",
      img: "./img/hearts.png",
      text: "Романтичный",
    },
    {
      id: "variant-3",
      img: "./img/smirk.png",
      text: "Хитрый",
    },
    {
      id: "variant-4",
      img: "./img/fright.png",
      text: "Пугливый",
    },
  ];

  const handleClick = () => {
    if (selectEmoji) {
      const userData = JSON.parse(localStorage.getItem("user")) || {};
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, character: selectEmoji })
      );
      navigate("/step-four");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <AppHeader headerText="3. Какой у тебя характер?" headerType="h2" />
            <ul className="emoji-variants">
              {emoji.map((emoji) => (
                <AnswerEmoji
                  key={emoji.id}
                  emojiId={emoji.id}
                  emojiText={emoji.text}
                  emojiImg={emoji.img}
                  emojiValue={emoji.text}
                  emojiChange={() => setSelectEmoji(emoji.text)}
                  isChecked={selectEmoji === emoji.text}
                />
              ))}
            </ul>
            <AppButton
              BtnText="Далее"
              isDisabled={!selectEmoji}
              btnType="button"
              btnClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
