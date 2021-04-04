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

    handleClick = () => {
        this.setState({title : 'Node js', box : 'border border-secondary'})
    }
    handleClickParameter = (bebas) => {
        console.log(bebas)
    }

    render() {
        console.log(this.state.title)
        return(
            <div className='container '>
               <div className={this.state.box}>
                   <h1>{this.state.title}</h1>
               </div>
               <div className="card">
                    <div className="card-body">
                        {this.state.dataDummy[0].nama}
                    </div>
                </div>
                {this.state.dataDummy.map((list) => {
                    return(
                        <div key={list.id} className="card">
                            <div className="card-body">
                                {list.nama}
                            </div>
                        </div>
                    )
                })}

                <div>
                    <button onClick={() => console.log('btn success')}>Test</button>
                    <button onClick={this.handleClick}>Test-Dua</button>
                    <button onClick={() => this.handleClickParameter('bebaskan')}>Bebas</button>
                </div>
            </div>
        );
    };
};
export default App;