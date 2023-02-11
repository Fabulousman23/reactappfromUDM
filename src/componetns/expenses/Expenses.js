import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expenses.css";
import Card from "../card/Card";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import { useState } from "react";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(element => {
        return element.date.getFullYear().toString() === filteredYear;
    })
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div >
    );
};

export default Expenses;
