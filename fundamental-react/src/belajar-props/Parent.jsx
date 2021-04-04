import React from 'react';
import Child from './Child';

const Parent = (props) => {
    console.log(props)

    const ketikaDiKlik = () => {
        alert('button di tekan')
    };
    return(
        <div className='container'>
            <div className="card my-4" style={{width: '18rem'}}>
                <img className="card-img-top" src={props.gambar}/>
                <div className="card-body">
                    <h5 className="card-title">{props.lesson}</h5>
                    <p className="card-text">{props.statusValid}</p>
                </div>
            </div>

            <div>
                <Child test={ketikaDiKlik}/>
            </div>
        </div>
    );
};
export default Parent;