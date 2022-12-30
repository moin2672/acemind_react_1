import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing]=useState(false);

    /*
    NewExpense component is the parent component of ExpenseForm component
    passing data from ExpenseForm to NewExpense
    Similar to onClick event; we can create custom event 
    Similar to the handler function declaration within the component; we can create a custom handler function
    */


    // like event handler function => saveExpenseDataHandler
    // like event in parameter => enteredExpenseData
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("NewExpense.js")
        console.log(expenseData)

        /*
        using props to call the app function and
        executing the function onAddExpense(expenseData)
        NOTE: <NewExpense onAddExpense={addExpenseHandler}/> => here the function was pointed in App.js
        but in  NewExpense.js it is executed.
        */
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const startEditingHandler=()=>{
        setIsEditing(true)
    }

    const stopEditingHandler = () =>{
        setIsEditing(false)
    }

  return (
    <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
