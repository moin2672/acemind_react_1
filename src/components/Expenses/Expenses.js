import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

/*
CONTROLLED COMPONENT: whenever we are using two way binding, then we are controlling a component

  <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
but here we are controlling our custom component
it means the values in the ExpensesFilter.js component are passed on to the parent component Expenses.js component => onChangeFilter={filterChangeHandler}
  <select value={props.selected} onChange={dropdownChangeHandler}>
and received from parent component => selected={filteredYear}

regarding select field.. real logic resides in parent component
that turn ExpenseFilter into called CONTROLLED COMPONENT

both the value as well as the changes to the value are not handled in a component itself, but in a parent component
Expenses.js component controls ExpenseFilter.js component

PRESENTATIONAL VS STATEFUL component
------------------------------------
STATELESS VS STATEFUL component
-------------------------------
DUMB VS SMART Component
-----------------------
Basically all react component in react manages some state.. i.e. useState
eg:
Expenses.js 
const [filteredYear, setFilteredYear]=useState('2020');

ExpenseForm.js
 const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

there are other components which don't manage any state, then it is called as STATELESS component

ExpenseItem.js
<Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>


STATELESS / PRESENTATIONAL / DUMB component
because it does not have internal state, it is available to output some data.

In most react applicaitons there are more STATELESS component than STATEFUL component
*/

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
