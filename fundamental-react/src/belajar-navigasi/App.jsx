import React from 'react';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from './Users';
import About from './About';
import Navigasi from './Navigasi';

const App = () => {
    return(
        <div className='container'>
            <div>
                <Router>
                    <Navigasi/>
                    <Switch>
                        <Route exact path='/' render={() => (<h1>My Logo Page</h1>)}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/about' component={About} />
                        <Route path='/user' component={Users} />
                        <Route path='/coba' render={() => (<h1>Ini Bagian Coba</h1>)}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};
export default App;