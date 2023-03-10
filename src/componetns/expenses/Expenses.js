import Card from "../card/Card";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "../expenses/Expenses.css";
import { useState } from "react";
import ExpensesList from "../NewExpense/ExpensesList";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
