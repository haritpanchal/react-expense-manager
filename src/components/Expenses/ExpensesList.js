import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expenses for the year {props.filteredYear}
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
