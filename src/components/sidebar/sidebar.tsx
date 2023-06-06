import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css';

function Sidebar() {
    return (
        <>
            <div className={styles.sidebar}>
                <ul>
                    <li>
                        <NavLink
                            to="/orders"
                            className={(a: any) => (a.isActive ? styles.lighter : '')}
                        >
                            Замовлення
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className={(a: any) => (a.isActive ? styles.lighter : '')}
                        >
                            Налаштування
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin"
                            className={(a: any) => (a.isActive ? styles.lighter : '')}
                        >
                            Адмін-панель
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
