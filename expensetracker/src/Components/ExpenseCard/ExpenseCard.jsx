import React from 'react'
import styles from './ExpenseCard.module.css'

const ExpenseCard = ({cardType, amount, buttonName}) => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.info}>{`${cardType}: `}<span className={styles.amount}>{`₹${amount}`}</span></h2>
        <button className={styles.btn}>{buttonName}</button>
    </div>
  )
}

export default ExpenseCard