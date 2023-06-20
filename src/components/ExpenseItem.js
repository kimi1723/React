import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const expenseDate = new Date();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 300;

    return(
        <div className="expense-item">
            <div>{props.date.toISOS+tring()}</div>
             <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;