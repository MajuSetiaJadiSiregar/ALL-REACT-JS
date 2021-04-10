import React,{useState, useEffect} from 'react';
import Axios from 'axios';


const Home = () => {
    const [dataPlaceHolder, setDataPlaceHolder] = useState([]);

    /**
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setDataPlaceHolder(response.data)
        }).catch((err) => console.log(err));
    },[]);
    */
   
    const readData = async () => {
        try {
            let response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
            setDataPlaceHolder(response.data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        readData();
    },[]);
    console.log(dataPlaceHolder);
    return(
        <div>
            <h1>Ini Bagian Home</h1>
        </div>
    );
};
export default Home;