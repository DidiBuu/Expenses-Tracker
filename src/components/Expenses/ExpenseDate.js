import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <div>
        <div className="expense-date__year">{month}</div>
        <div className="expense-date__month">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
