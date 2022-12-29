import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {

    /*
    NewExpense component is the parent component of ExpenseForm component
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
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
