import { Link } from 'react-router-dom';
import proffmechLogo from '../../assets/proffmech.png';
import styles from './header.module.css';

function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img
                        src={proffmechLogo}
                        alt="ProffMech Logo"
                    />
                    <h1>ProffMech</h1>
                </div>
                <div className="user-info">
                    <span>Admin</span>
                    <Link
                        to={'/auth'}
                        className={styles.auth}
                    >
                        logout
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;
