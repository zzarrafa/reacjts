import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

import './App.css';

function App() {
  const contacts = [
    {
      id : "1",
      "name" : "zineb",
      "email" : "zine@gmail.com",
    },
    {
      id : "2",
      "name" : "caml",
      "email" : "caml@gmail.com",
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
