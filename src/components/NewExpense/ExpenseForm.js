import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangedHandler = (event) => {setEnteredTitle(event.target.value);console.log("enteredTitle entered",enteredTitle) }
    const amountChangedHandler = (event) => {setEnteredAmount(event.target.value);console.warn("amount entered",enteredAmount)  }
    const dateChangedHandler = (event) => { setEnteredDate(event.target.value);console.info("date entered",enteredDate) }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log({enteredTitle,setEnteredAmount,enteredDate})

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)

        /*
        two way binding
        value={enteredTitle}
        value={enteredAmount}
        value={enteredDate}

        Previously the data was setting states not the input field.

        Now, using two way binding we can set data to the input field.
        Therefore, when we send empty string for setState function, then it will set the input field empty
        */


        /*
        like props we can take in the function onSaveExpenseData from NewExpense.js
        here the function onSaveExpenseData(para) is getting executed
        where as in NewExpense.js the function is being pointed in HTML tag <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        */

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangedHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;