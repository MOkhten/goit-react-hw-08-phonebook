export const selectFilteredContacts = (state) => {
  return state.contacts.contacts.filter((contact) => {
    return contact.name
      .toLowerCase()
      .includes(state.contacts.filter.toLowerCase());
  });
};
