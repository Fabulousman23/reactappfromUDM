import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>August 25th 2022</div>
            <div className='expense-item__description'>
                <h2>iPad</h2>
                <div className='expense-item__price'>$939.46</div>
            </div>
        </div>
    );
}
export default ExpenseItem;