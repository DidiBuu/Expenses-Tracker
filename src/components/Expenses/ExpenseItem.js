import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import React, {useState} from "react";
import Card from '../UI/Card';

const ExpenseItem = (props) => {


  return (
      <li>
          <Card className="expense-item">
              <ExpenseDate date={props.date} title={props.title} amount={props.amount}/>
              <div className="expense-item__description">
                  <h2>{props.title}</h2>
                  <div className="expense-item__price">${props.amount}</div>
              </div>
          </Card>
      </li>
  );
};

export default ExpenseItem;
