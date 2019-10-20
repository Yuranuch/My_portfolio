import React from 'react';
import styles from './MyWorks.module.css'
import MyWorkItem from "./MyWorkItem/MyWorkItem";

function MyWorks() {
    return (
        <div className={styles.myWorks}>
            <div className={styles.container}>
                <div className={styles.title}>MySkills</div>
                <div className={styles.flexContainer}>
                    <MyWorkItem
                        src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
                        info="opevpoepor o poero poe oovreo vpemovmero mer merm me pmr eprmevp emp mvpem poem poem pomvep merpoom erpoom vpoem povem"
                    />
                    <MyWorkItem
                        src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
                        info="opevpoe oovreo vpemovmero mer merm me pmr eprmevp emp mvpem poem poem pomvep merpoom erpoom em ewfwefewf"
                    />
                    <MyWorkItem
                        src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
                        info="opevpoe oovreo vpemovmero mer merm me pmr eprmevp emp mvpem poem poem pomvep merpoom erpoom em ewfwefewf"
                    />
                    <MyWorkItem
                        src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
                        info="opevpoe oovreo vpemovmero mer merm me pmr eprmevp emp mvpem poem poem pomvep merpoom erpoom em ewfwefewf"
                    />

                </div>
            </div>
        </div>
    );
}

export default MyWorks;
