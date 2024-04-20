import { Contact } from "../App";
import "./ContactItem.css";

export default function ContactItem({contact, onCilckRemove}: {contact: Contact, onCilckRemove: (id: number)=> void}) {
  const {name, email, id} = contact;
	return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={()=> onCilckRemove(id)}>🗑️ Remove</button>
    </div>
  );
}
