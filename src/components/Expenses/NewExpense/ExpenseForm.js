import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {



    const [oldTitle, setTitle] = useState('');
    const [oldAmount, setAmount] = useState('');
    const [oldDate, setDate] = useState('');


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData={
            title: oldTitle,
            amount: +oldAmount,
            date: new Date(oldDate)
        };
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };



    return(

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={oldTitle}
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value = {oldAmount}
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value ={oldDate}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onStopEditing}>Cancel</button>

                <button type='submit'>Add Expense</button>
            </div>

        </form>




    )
};

export default ExpenseForm;