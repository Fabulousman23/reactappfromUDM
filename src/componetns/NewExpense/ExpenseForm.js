import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredTitled, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     EnteredTitle: " ",
    //     EnteredAmount: " ",
    //     EnteredDate: " "
    // })
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, EnteredTitle: event.target.value };
        // })
    };
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitled,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitled}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense-actions"></div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
