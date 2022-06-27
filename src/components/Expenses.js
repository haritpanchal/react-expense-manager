import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((element) => {
        return (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
