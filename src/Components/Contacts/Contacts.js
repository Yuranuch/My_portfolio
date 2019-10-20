import React from 'react';
import styles from './Contacts.module.css'
import ContactsForm from "./ContactsForm/ContactsForm";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.title}>Contacts</div>
                <div className={styles.flexContainer}>
                    <ContactsForm/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
