import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const variant = [
    {
      id: "variant-1",
      points: 1,
    },
    {
      id: "variant-2",
      points: 2,
    },
    {
      id: "variant-3",
      points: 3,
    },
    {
      id: "variant-4",
      points: 4,
    },
    {
      id: "variant-5",
      points: 5,
    },
  ];

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    localStorage.setItem(
      "user",
      JSON.stringify({ ...userData, points: points })
    );
    points ? setIsDisabled(false): setIsDisabled(true);
  }, [points]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
          <div className="question">
            <AppHeader
              headerText="4. Оцените наш учебный центр"
              headerType="h2"
            />
            <ul className="level-variants">
              {variant.map((elem) => (
                <li className="variant-wrapper">
                  <input
                    value={elem.points}
                    required
                    type="radio"
                    name="variant"
                    id={elem.id}
                    onChange={(e) => {
                      setPoints(e.target.value);
                    }}
                  />
                  <label htmlFor={elem.id}>{elem.points}</label>
                </li>
              ))}
            </ul>
            <AppButton
              isDisabled={isDisabled}
              btnClick={() => navigate("/thanks")}
              BtnText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
