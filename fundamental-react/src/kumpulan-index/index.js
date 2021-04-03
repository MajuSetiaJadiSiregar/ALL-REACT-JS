import React from 'react';
import ReactDOM from 'react-dom';

function ListMenu() {
   return(
      <div>
         <li>Homeaaa</li>
         <li>Productaaaaa</li>
         <li>Contactaaaaaa</li>
      </div>
   );
};
function Header() {
   return(
      <div>
         <ul>
            <ListMenu/>
         </ul>
      </div>
   )
}

ReactDOM.render(<Header/>, document.getElementById('root'));