import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContatList = props.contacts.map((contact) => {
        return <ContactCard> contact={contact}</ContactCard>;
       
    });
 
    
    return (
        <div className="ui celled list">{renderContatList}
        </div>
    );
}




export default ContactList;