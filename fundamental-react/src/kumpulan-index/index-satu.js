import React from 'react';
import ReactDOM from 'react-dom';

const nama = 'Rumah-Coding';
const alamat = 'Margonda';

const pelajaran = {
   web : 'Laravel',
   FE : 'React JS'
};

const element = <div>
   <div>
      <h1>Test Div awal</h1>
   </div>
   <p>Ini Element</p>
</div>


//ReactDOM.render(<h1>{nama} {alamat} {pelajaran.FE}</h1>, document.getElementById('root'));
ReactDOM.render(element, document.getElementById('root'));




// function formatName(user) {
//    return user.firstName + ' ' + user.lastName;
//  }
 
//  const user = {
//    firstName: 'Harper',
//    lastName: 'Perez'
//  };
 
//  const element = (
//    <h1>
//      Hello, {formatName(user)}!
//    </h1>
//  );
 
//  ReactDOM.render(
//    element,
//    document.getElementById('root')
//  );
 
