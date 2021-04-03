import React from 'react';
import Navigation from './Navigation';


const App = () => {

   return(
      <div className='container'>
         <div className='row'>
            <div className='col'>
               <Navigation/>
            </div>

            <div className='col'>
               <Navigation/>
            </div>
         </div>

      </div>
   );
};
export default App;