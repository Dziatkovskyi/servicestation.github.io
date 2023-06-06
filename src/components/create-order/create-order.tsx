import { useState } from 'react';
import DatePicker from 'react-datepicker';

function CreateOrder() {
    const [orderId] = useState(1 + Math.floor(Math.random() * 100));
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <>
            <div className="form-group">
                <label>Order id</label>
                <input
                    value={orderId}
                    className="form-control"
                    disabled
                ></input>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                ></input>
                <small
                    id="emailHelp"
                    className="form-text text-muted"
                >
                    We'll never share your email with anyone else.
                </small>
            </div>

            <div className="form-group">
                <label>Дата замовлення</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
        </>
    );
}

export default CreateOrder;
