import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpend(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHamdler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm !== true && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}

      {showForm === true && (
        <ExpenseForm
          hideForm={hideFormHamdler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
