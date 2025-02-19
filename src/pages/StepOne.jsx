import React, { useEffect, useState } from "react";
import { AppButton } from "../components/AppButton";
import { AppHeader } from "../components/AppHeader";
import { AppLabel } from "../components/AppLabel";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [userName, setUserName] = useState("");

  const [errorName, setErrorName] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);
  const RegexUser = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

  const handleClick = () => {
    if (!RegexUser.test(userName)) {
      setErrorName(true);
    }
    if (RegexUser.test(userName)) {
      setErrorName(false);
    }
  };

  useEffect(() => {
    if (userName) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userName]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={0} />
          <div className="question">
            <AppHeader headerText="1. Занимательный вопрос"></AppHeader>
            <AppLabel
              labelType="text"
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              errorText="Введите ответ в правильном формате"
              labelChange={setUserName}
              isError={errorName}
            ></AppLabel>

            <AppButton
              BtnText="Далее"
              isDisabled={false}
              btnType="button"
              btnClick={() => handleClick()}
            ></AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
