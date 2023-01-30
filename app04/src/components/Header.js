
const Header = ({ title }) => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{title}</a>
        </div>
    </nav>
);

export default Header;