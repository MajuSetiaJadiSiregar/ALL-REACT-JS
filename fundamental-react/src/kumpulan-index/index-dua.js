import React from 'react';
import ReactDOM from 'react-dom';

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


function makan(makanans) {
   return makanans.ayam
};
const makanan = {
   ayam : 'Gorengsss',
   harga : 2000 
}
const komponen = <h1>{makan(makanan)}</h1>
ReactDOM.render(komponen, document.getElementById('root'));

 