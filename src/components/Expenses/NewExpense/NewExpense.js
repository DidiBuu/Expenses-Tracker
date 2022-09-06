import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setisEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onNewExpense(expenseData);
        setisEditing(false);
    };
    const startEditing = () =>{
        setisEditing(true);
    };
    const stopEditing = () =>{
        setisEditing(false);
    };
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData = {onSaveExpenseDataHandler} onStopEditing={stopEditing}/>}

        </div>
    )
};

export default NewExpense;