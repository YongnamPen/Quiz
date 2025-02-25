import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");

  const course = [
    {
      id: "variant-1",
      value: "React",
    },
    {
      id: "variant-2",
      value: "Python",
    },
    {
      id: "variant-3",
      value: "DATA Analytics",
    },
    {
      id: "variant-4",
      value: "UX/UI",
    },
  ];

  const handleClick = () => {
    if (selectedCourse) {
      const userData = JSON.parse(localStorage.getItem("user")) || {};
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userData, course: selectedCourse })
      );
      navigate("/step-three");
    } else {
      alert("Пожалуйста, выберите курс.");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <AppHeader headerText="Выберите курс" headerType="h2" />
            <ul className="variants">
              {course.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  answerText={elem.value}
                  answerId={elem.id}
                  answerValue={elem.value}
                  answerChange={() => setSelectedCourse(elem.value)}
                  isChecked={selectedCourse === elem.value}
                />
              ))}
            </ul>
            <AppButton
              BtnText="Далее"
              isDisabled={!selectedCourse}
              btnType="button"
              btnClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
