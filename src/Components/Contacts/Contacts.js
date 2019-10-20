import React from 'react';
import styles from './Contacts.module.css'
import ContactsForm from "./ContactsForm/ContactsForm";
import Title from "../../reuseComponents/Title/Title";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <Title title="Contacts"/>
                <div className={styles.flexContainer}>
                    <ContactsForm/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
