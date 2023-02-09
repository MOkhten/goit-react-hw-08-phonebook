import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { selectError, selectIsLoading } from 'components/redux/selector';
import { fetchContacts } from 'components/redux/contactsThunk';

const Contacts = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <>
            <ContactForm />
            <Filter />
            {isLoading && !error && <Loader />}
            {error && <p>{error}</p>}
            {!isLoading && <ContactList />}
        </>
    );
};

export default Contacts;