import React from "react";

export const AppButton = ({BtnText,isDisabled,btnType,btnClick}) => {
    return (
        <button disabled={isDisabled} type={btnType} id="next-btn" onClick={btnClick}>
            {BtnText}
        </button>
    );
};