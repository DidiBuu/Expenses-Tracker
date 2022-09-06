import logo from "./logo.svg";
import React, {useState} from "react";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/NewExpense/ExpenseFilter";
import Chart from "./components/Expenses/Chart/Chart";

const DUMMY_Expenses = [
  {
    id: 1,
    title: "Item 1",
    amount: 100,
    date: new Date(2020, 2, 13),
  },
  {
    id: 2,
    title: "Item 2",
    amount: 120,
    date: new Date(2022, 2, 12),
  },
  {
    id: 3,
    title: "Item 3",
    amount: 140,
    date: new Date(2022, 2, 12),
  }

];
const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);

  const onNewExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });

    // console.log(expense);
  };
  const onStartFilterHandler = (filter) => {
    console.log(filter);
  };


  return (
    <div>
      <NewExpense onNewExpense ={onNewExpenseHandler}/>





      <Expenses items={expenses}>


        </Expenses>


    </div>
  );
}

export default App;
