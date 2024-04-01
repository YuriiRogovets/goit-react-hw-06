import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  return (
    <ul className={css.contactListWrap}>
      {(selectNameFilter
        ? selectContacts.filter((contact) =>
            contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
          )
        : selectContacts
      ).map((item) => {
        return (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
