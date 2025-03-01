import React, { useEffect, useState } from "react";
import { AppButton } from "../components/AppButton";
import { AppHeader } from "../components/AppHeader";
import { AppLabel } from "../components/AppLabel";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [userAdvertising, setUserAdvertising] = useState("");

  const [errorAdvertising, setErrorAdvertising] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);
  const RegexUser = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

  const navigate = useNavigate();

  const handleClick = () => {
    if (!RegexUser.test(userAdvertising)) {
      setErrorAdvertising(true);
    }
    if (RegexUser.test(userAdvertising)) {
      setErrorAdvertising(false);
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userData, advertising: userAdvertising })
        );
      } else {
        localStorage.setItem("user", JSON.stringify({ name: userAdvertising }));
      }
      navigate("/step-two");
    }
  };

  useEffect(() => {
    if (userAdvertising) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userAdvertising]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <AppHeader headerText="Где вы про нас узнали?"></AppHeader>
            <AppLabel
              labelType="text"
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              errorText="Введите ответ в правильном формате"
              labelChange={setUserAdvertising}
              isError={errorAdvertising}
            ></AppLabel>

            <AppButton
              BtnText="Далее"
              isDisabled={isDisabled}
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
