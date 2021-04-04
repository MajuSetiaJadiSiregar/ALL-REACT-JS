import React from 'react';
import ListHolder from './ListHolder';

export default class ClassCycle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataPlaceHolder : []
        };
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(dataPlace => this.setState({dataPlaceHolder : dataPlace}))
        .catch(err => console.log(err))
    };
    render(){
        
        return(
            <div className='container'>
                {this.state.dataPlaceHolder.length === 0 ? (
                    <h1>Sabar Bos Data Masih Kosong</h1>
                ) : (
                     this.state.dataPlaceHolder.map((listData) => {
                    return <ListHolder key={listData.id} title={listData.title} body={listData.body}/>
                })
                )}

            </div>
        )
    }
}