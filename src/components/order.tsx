import { FC } from 'react';
import { IOrder, IOrderDoneState } from '../state/orders';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import styles from './order.module.css';

export const StateToName: Record<IOrderDoneState, string> = {
    [IOrderDoneState.BeingDone]: 'Виконується',
    [IOrderDoneState.New]: 'Нове',
    [IOrderDoneState.Done]: 'Виконано',
    [IOrderDoneState.Ready]: 'Готово',
};

export const StateToClass: Record<IOrderDoneState, string> = {
    [IOrderDoneState.BeingDone]: 'bg-danger',
    [IOrderDoneState.New]: 'bg-info',
    [IOrderDoneState.Done]: 'bg-success',
    [IOrderDoneState.Ready]: 'bg-primary',
};

const Order: FC<any> = ({ order }: { order: IOrder }) => {
    return (
        <>
            <div className={`card text-left p-1 ${styles.order}`}>
                <div className="card-body d-md-flex gap-3 align-items-center justify-content-between">
                    <h6 className="card-title m-0">
                        <span>Замовлення&nbsp;{order.id}</span> <br />
                    </h6>
                    <div>
                        <span>{format(order.date, 'dd.MM.yyyy')}</span>
                    </div>
                    <div>
                        <span className="me-2">Стан:</span>
                        <span className={`m-0 p-1 rounded text-light ${StateToClass[order.state]}`}>
                            {StateToName[order.state]}
                        </span>
                    </div>
                    <div>
                        <span className="me-2">Ціна:</span>
                        <span>{order.sum}</span>
                    </div>
                    <Link
                        to={'/orders/view/' + order.id}
                        className="btn btn-primary"
                    >
                        Показати
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Order;
