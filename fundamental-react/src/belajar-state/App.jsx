import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : 'Learn React Js',
            box : 'border border-primary',
            dataDummy : [
                {
                    id :  1,
                    nama : 'React-Js'
                },
                {
                    id :  2,
                    nama : 'Express-Js'
                }
            ]

        };
    };
    render() {
        return(
            <div className='container '>
               <div className={this.state.box}>
                   <h1>{this.state.title}</h1>
               </div>
               <div class="card">
                    <div class="card-body">
                        {this.state.dataDummy[0].nama}
                    </div>
                </div>
                {this.state.dataDummy.map((list) => {
                    return(
                        <div key={list.id} class="card">
                            <div class="card-body">
                                {list.nama}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    };
};
export default App;