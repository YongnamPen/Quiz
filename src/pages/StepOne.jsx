import React, { useEffect, useState } from "react";
import { AppButton } from "../components/AppButton";
import { AppHeader, Header } from "../components/AppHeader";
import { AppLabel } from "../components/AppLabel";

const StepOne = () => {
  const [userPhone, setUserPhone] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  
useEffect(() => {
    if (userPhone) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userPhone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <AppHeader headerText="1. Занимательный вопрос"></AppHeader>
            <AppLabel
              labelType="text"
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              errorText="Введите номер в правильном формате например"
              labelChange={setUserPhone}
            ></AppLabel>
            
            <AppButton
              BtnText="Далее"
              isDisabled={isDisabled}
              btnType="submit"
            ></AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
