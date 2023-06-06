import { Outlet } from 'react-router-dom';
import { ORDERS } from '../state/orders';
import Header from './header/header';
import styles from './main.module.css';
import Sidebar from './sidebar/sidebar';

function Main() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Header></Header>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar></Sidebar>
                </div>
                <div className={styles.content}>
                    <Outlet context={ORDERS}></Outlet>
                    {/* <OrdersList orders={ORDERS}></OrdersList> */}
                </div>
            </div>
        </>
    );
}

export default Main;
