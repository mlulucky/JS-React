import "./ContactList.css";
import ContactItem from "./ContactItem";
import { Contact } from "../App";

export default function ContactList({
  contactList,
  onRemoveContact,
}: {
  contactList: Contact[];
  onRemoveContact: (id: number) => void;
}) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactList.map((item, idx) => {
        return <ContactItem key={idx} contact={item} onCilckRemove={onRemoveContact}/>;
      })}
    </div>
  );
}
