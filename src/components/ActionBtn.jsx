import React from 'react';

function ActionBtn(props){
    const {text} = props;
    return (
        <div className="action-btn normal-weight blue">
            {text}
        </div>
    );
}//ActionBtn

export default ActionBtn;