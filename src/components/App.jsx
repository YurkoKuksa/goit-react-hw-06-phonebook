import React, { useEffect, useState } from 'react';
import { HeaderTwo, MainContainer } from './App.styled';
import { toast } from 'react-toastify';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const getLocalStorageData = () =>
    JSON.parse(localStorage.getItem('USERS_DATA')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(getLocalStorageData);

  useEffect(() => {
    toast.info('Contact list was changed');
    localStorage.setItem('USERS_DATA', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddName = newObject => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === newObject.name.toLowerCase()
    );

    if (isNameExists) {
      alert(
        `Contact with the name "${newObject.name}" already exists. Please choose a different name.`
      );
    } else {
      setContacts(prevContacts => [...prevContacts, newObject]);
    }
  };

  const handleChangeFilterName = e => {
    setFilter(e.target.value);
  };

  const getFilterData = () => {
    return contacts.filter(
      user =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = id => {
    setContacts(prevContacts => prevContacts.filter(user => user.id !== id));
  };

  const filterNames = getFilterData();

  return (
    <MainContainer>
      <HeaderTwo>Phonebook</HeaderTwo>
      <Form addName={handleAddName} />

      <HeaderTwo>Contacts</HeaderTwo>
      <Filter onChange={handleChangeFilterName} filter={filter} />

      <ContactsList filterNames={filterNames} onDeleteUser={handleDelete} />
    </MainContainer>
  );
};
