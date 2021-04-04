import React from 'react';
import HookLife from './HookLife';
import HookState from './HookState';

const App = () => {
    return(
        <div>
            <HookState/>
            <div>
                <HookLife/>
            </div>
        </div>
    );
};
export default App;