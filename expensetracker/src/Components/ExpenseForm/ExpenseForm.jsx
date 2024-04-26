import React, { useState } from 'react';
import styles from './ExpenseForm.module.css'

const ExpenseForm = () => {
    
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Add Expenses</h2>
        <form action="">
            <input type="text" id='Title' placeholder='Title' className={styles.intValue}/>
            <input type="text" id='Price' placeholder='Price' className={styles.intValue}/>
            <input type="text" id='Category' placeholder='Category' className={styles.intValue}/>
            <input type="Date" id='Date' placeholder='Date' className={styles.intValue}/>
            <button type='submit' className={styles.submitBtn}>Add Expense</button>
            <button className={styles.cancelBtn}>Cancel</button>
        </form>
    </div>
  )
}

export default ExpenseForm