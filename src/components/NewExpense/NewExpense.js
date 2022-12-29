import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

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
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
