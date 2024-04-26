import React, { useState } from 'react'
import styles from './HomePage.module.css'
import IncomeCard from '../IncomeCard/IncomeCard'
import ExpenseCard from '../ExpenseCard/ExpenseCard'
import InputForm from '../InputForm/InputForm'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import BasicPie from '../PieChart/PieCharts'
import BarChart from '../BarChart/BarChart'
import ChartContainer from '../BarChart/HorizontalBarChart'
import RecentTransctions from '../../Table/RecentTransctions'
import LineBarChart from '../LineChart/LineBarChart'


const HomePage = () => {
    const [income, setIncome] = useState(5000)
  return (
    <div>
        <h1>Expense Tracker</h1>
        <div className={styles.homeWrapper}>
            <IncomeCard cardType={'Wallet Balance'} amount={income} buttonName={"+ Add Income"}></IncomeCard>
            <ExpenseCard cardType={'Expenses'} amount={"0"} buttonName={"+ Add Expense"}></ExpenseCard>
            <BasicPie></BasicPie>
        </div>
        {/* <InputForm></InputForm>
        <ExpenseForm></ExpenseForm> */}
        <div className={styles.secondPart}>
            <div className={styles.recentWrapper}>
                <h2>Recent Transactions</h2>
                <RecentTransctions></RecentTransctions>
            </div>
            <div>
                <h2>Top Expenses</h2>
                <BarChart></BarChart>
                {/* <LineBarChart></LineBarChart> */}
            </div>
        </div>

    </div>
  )
}

export default HomePage