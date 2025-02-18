import React from "react";

export const AppButton = ({BtnText,isDisabled,btnType}) => {
    return (
        <button disabled={isDisabled} type={btnType} id="next-btn">
            {BtnText}
        </button>
    );
};