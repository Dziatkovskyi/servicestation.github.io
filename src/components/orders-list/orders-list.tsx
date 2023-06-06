import { Link, useOutletContext } from 'react-router-dom';
import { IOrder } from '../../state/orders';
import { default as Order } from '../order';

// function OrdersList({ orders }: { orders: IOrder[] }) {
function OrdersList() {
    const orders = useOutletContext() as any;

    return (
        <>
            <div className="mb-2">
                <Link
                    to={'/orders/create/'}
                    className="btn btn-primary"
                >
                    Створити
                </Link>
            </div>
            {orders.map((order: IOrder) => {
                return (
                    <div
                        key={order.id}
                        className="mb-2"
                    >
                        <Order order={order}></Order>
                    </div>
                );
            })}
        </>
    );
}

export default OrdersList;
