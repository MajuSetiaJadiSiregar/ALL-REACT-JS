import React from 'react';

const Child = (props) => {
    //console.log(props)
    return(
        <div>
            <button onClick={props.test}>Ini Button Child</button>
        </div>
    )
};
export default Child;