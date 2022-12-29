import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    // const [enteredTitle, setEnteredTitle] = useState(null);
    // const [eneredAmount, setEnteredAmount] = useState(null);
    // const [enteredDate, setEnteredDate] = useState(null);

    const [userInput, setUserInput] = useState({enteredTitle:'', enteredAmount:'', enteredDate:''})

    const titleChangedHandler = (event) => {
        // setUserInput({...userInput,enteredTitle:event.target.value}); 
        // react schedule states and it will not change instantly. so, we may get incorrect state. hence we use the below method

        // if we use the below approach react will guarantee that the statesnapshot will give you hear in a function will always be the latest state snapshot keeping all schedule state in mind
        // it should be used, whenever the state update depends on the previous state
        setUserInput((prevState)=>{
            console.log({...userInput,...prevState, enteredTitle:event.target.value})
            return {...prevState, enteredTitle:event.target.value}
        })

    }


    const amountChangedHandler = (event) => {
        // setUserInput({...userInput,enteredAmount:event.target.value});
        setUserInput((prevState)=>{
            console.log( {...prevState, enteredAmount:event.target.value})
            return {...prevState, enteredAmount:event.target.value}
        })
    }
    const dateChangedHandler = (event) => { 
        // setUserInput({...userInput,enteredDate:event.target.value});
        setUserInput((prevState)=>{
            console.log({...prevState, enteredDate:event.target.value})
            return {...prevState, enteredDate:event.target.value}
        })
    }

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