import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { FcDeleteDatabase } from 'react-icons/fc';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.button} onClick={handleDelete}>
        Delete
        <FcDeleteDatabase style={{ width: '24px', height: '24px' }} />
      </button>
    </>
  );
};
