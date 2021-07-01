import React from 'react';

function ActionBtn(props){
    const {text, clickFunc} = props;
    return (
        <div className="action-btn normal-weight blue"
            onClick={clickFunc}
        >
            {text}
        </div>
    );
}//ActionBtn

export default ActionBtn;