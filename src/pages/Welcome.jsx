import React, { useEffect, useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userName && userPhone) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userName, userPhone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader headerText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              labelPlaceholder="Имя"
              errorText="Введите имя в правильном формате например"
              labelId="username"
              labelType="text"
              labelValue={userName}
              labelChange={setUserName}
            />
            <AppLabel
              labelText="Ваш номер"
              labelPlaceholder="+998 9- --- -- -- "
              errorText="Введите номер в правильном формате например"
              labelId="phone"
              labelType="tel"
              labelPattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              labelValue={userPhone}
              labelChange={setUserPhone}
            />
            <AppButton
              BtnText="Далее"
              isDisabled={isDisabled}
              btnType="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
