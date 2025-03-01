import React from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";

const Thanks = () => {
  const { name, phone, advertising, character, course, points } = JSON.parse(
    localStorage.getItem("user")
  );
  const value = [
    {
      text: "Имя:",
      userResponse: name,
    },
    {
      text: "Номер телефона:",
      userResponse: phone,
    },
    {
      text: "Откуда узнали:",
      userResponse: advertising,
    },
    {
      text: "Ваш характер:",
      userResponse: character,
    },
    {
      text: "Желаемый курс:",
      userResponse: course,
    },
    {
      text: "Оценка школы:",
      userResponse: points,
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <AppHeader
            headerText="Спасибо за прохождение опроса!"
            headerType="h1"
          />
          {value.map((elem) => (
            <div className="info">
              <span>{elem.text}</span>
              <span>{elem.userResponse}</span>
            </div>
          ))}
          <p>Получи свою скидку по ссылке ниже</p>
          <AppButton
            btnType="button"
            BtnText="Получить ссылку"
            btnId="get-link"
          />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
