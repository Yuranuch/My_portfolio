import React from 'react';
import styles from './ContactsForm.module.css'


function ContactsForm(props) {
    return (

        <div className={styles.contactsForm}>

            <input placeholder="Имя" />
            <input placeholder="Email"/>
            <textarea placeholder="Сообщение"/>
            <div className={styles.sendButton}><button>Отправить</button></div>



        </div>

    );
}

export default ContactsForm;