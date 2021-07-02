import React from 'react';

function ActionBtn(props){
    const {text, clickFunc, extraClases="", color="blue", weight="normal-weight"} = props;
    return (
        <div className={"action-btn "+weight+" "+color+" "+extraClases}
            onClick={clickFunc}
        >
            {text}
        </div>
    );
}//ActionBtn

export default ActionBtn;