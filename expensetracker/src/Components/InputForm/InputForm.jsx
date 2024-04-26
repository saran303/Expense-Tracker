import React, { useState } from 'react';
import styles from './InputForm.module.css'

const InputForm = () => {
    const [addBalance, setAddBalance] = useState();
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Add Balance</h2>
        <form action="">
            <input type="text" placeholder='Income Amount' id='Income Amount' value={addBalance} onChange={e =>setAddBalance(e.target.value)} className={styles.intValue}/>
            <button type='submit' className={styles.submitBtn}>Add Balance</button>
            <button className={styles.cancelBtn}>Cancel</button>
        </form>
    </div>
  )
}

export default InputForm