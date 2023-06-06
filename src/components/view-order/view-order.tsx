import { format } from 'date-fns';
import { useMemo, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { IOrder, IOrderDoneState } from '../../state/orders';
import { StateToClass, StateToName } from '../order';
import styles from './view-order.module.css';

function ViewOrder() {
    const orders = useOutletContext() as any;
    const params = useParams();

    const [abobaState, setAbobaState] = useState(false);

    const order: IOrder | undefined = useMemo(() => {
        return orders.find((orderToFind: any) => orderToFind.id === Number(params.id));
    }, [orders, params.id]);

    return (
        <>
            {order && (
                <>
                    <div className="card">
                        <div className="card-title">
                            <span className="me-2">Замовлення №{order.id}</span>
                            <span className={`m-0 p-1 rounded text-light ${StateToClass[order.state]}`}>
                                {StateToName[order.state]}
                            </span>
                        </div>
                        <div className="card-body">
                            <div className={styles.imageDesc}>
                                <div>
                                    <img
                                        src={`/${order.link}`}
                                        alt={order.orderDescription}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                                <p className="m-0">
                                    {order.orderDescription} <br />
                                    {order.client}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div>Замовлення виконує: {order.mechanic}</div>
                            <p>
                                {order.orderDescription} <br />
                                {order.client}
                            </p>
                            <p>
                                Дата створення замовлення: {format(order.date, 'dd.MM.yyyy')} <br />
                                Назва послуги: {order.serviceName}
                            </p>

                            <div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        order.state === IOrderDoneState.Done;
                                        setAbobaState(() => !abobaState);
                                    }}
                                >
                                    Виконати
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default ViewOrder;
