import React from 'react';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import { filterContacts } from 'redux/contacts/filterSlice';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { ProgressBar } from 'react-loader-spinner';

import { Contact } from 'components/Contact/Contact';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const handleFilterChange = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {contacts.length > 0 && <Filter onChange={handleFilterChange} />}
      {isLoading && !error && <ProgressBar />}
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.any,
};
export default ContactList;
