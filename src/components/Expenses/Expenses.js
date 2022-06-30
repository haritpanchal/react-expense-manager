import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (changeYear) => {
    setFilteredYear(changeYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} filteredYear={filteredYear} />
    </Card>
  );
}

export default Expenses;
