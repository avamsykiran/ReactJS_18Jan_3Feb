import { Link } from 'react-router-dom';

const Header = ({ title }) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{title}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" className='nav-link'>Accounts</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/addAccount" className='nav-link'>New Account</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;