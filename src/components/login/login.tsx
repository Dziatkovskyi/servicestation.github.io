import { Link } from 'react-router-dom';
import proffmechLogo from '../../assets/proffmech.png';
import styles from './login.module.css';

function Login() {
    return (
        <>
            <div className={`container-fluid ${styles.full}`}>
                <div className="col-md-4">
                    <div className="form-container">
                        <div className="text-center mx-auto">
                            <h3 className="title">ProffMech</h3>

                            <div className="form-icon">
                                <img
                                    src={proffmechLogo}
                                    width="80"
                                    height="80"
                                />
                            </div>

                            <h3 className="title">Авторизація</h3>
                        </div>

                        <form className="form-horizontal">
                            <div className="form-group">
                                <label>Логін</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label>Пароль</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder=""
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-default btn-primary "
                            >
                                <Link
                                    to={`/orders`}
                                    className="text-light"
                                >
                                    Вхід
                                </Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
