import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState(null);
    const [eneredAmount, setEnteredAmount] = useState(null);
    const [enteredDate, setEnteredDate] = useState(null);

    const titleChangedHandler = (event) => {setEnteredTitle(event.target.value);console.log("enteredTitle entered",enteredTitle) }
    const amountChangedHandler = (event) => {setEnteredAmount(event.target.value);console.warn("amount entered",eneredAmount)  }
    const dateChangedHandler = (event) => { setEnteredDate(event.target.value);console.info("date entered",enteredDate) }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangedHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;