import React, {useEffect, useState} from 'react';
import ListHolder from '../belajar-lifecyle/ListHolder';

const HookLife = () => {

    const [DataPlaceHolder, setDataPlaceHolder] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(dataPlace => setDataPlaceHolder(dataPlace))
        .catch(err => console.log(err))
    },[]);

    
    return(
        <div className='container'>
            {DataPlaceHolder === 0 ? (
                <h1>Sabar Bos Data Masih Kosong</h1>
            ) : (
                    DataPlaceHolder.map((listData) => {
                return <ListHolder key={listData.id} title={listData.title} body={listData.body}/>
            })
            )}
        </div>
    );
};
export default HookLife;