import React from 'react';

const ListHolder = (props) => {
    return(
        <div className="card">
            <div className="card-header">
                <h1>{props.title}</h1>
            </div>
            <div className="card-body">
                <p>{props.body}</p>
            </div>
        </div>
    )
};
export default ListHolder;