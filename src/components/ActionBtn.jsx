import React from 'react';
import { Image } from 'react-bootstrap';

function ActionBtn(props){
    const {text, clickFunc, extraClases="", color="blue", weight="normal-weight"} = props;
    const {icon} = props
    return (
        <div className={"action-btn v-center-content "+weight+" "+color+" "+extraClases}
            onClick={clickFunc}
        >
            {text}
            {icon && <Image className="icon-img m-10-left" src={icon}/>}
        </div>
    );
}//ActionBtn

export default ActionBtn;