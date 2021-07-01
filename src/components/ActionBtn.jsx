import React from 'react';

function ActionBtn(props){
    const {text, clickFunc, bgColor="", color="blue", weight="normal-weight"} = props;
    return (
        <div className={"action-btn "+weight+" "+color+" "+bgColor}
            onClick={clickFunc}
        >
            {text}
        </div>
    );
}//ActionBtn

export default ActionBtn;