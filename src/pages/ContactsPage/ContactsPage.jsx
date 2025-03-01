import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';  // Исправленный путь
import { selectContacts } from '../../redux/contacts/contactsSlice';  // Исправленный путь

const ContactsPage = () => {
  return (
    <div>
      <h1>Contacts Page</h1>
      <p>Здесь будет ваша телефонная книга.</p>
      <ContactForm />  {/* Добавляем форму для добавления контактов */}
    </div>
  );
};

export default ContactsPage;
