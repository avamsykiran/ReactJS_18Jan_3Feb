
const Header = props => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
        </div>
    </nav>
);

export default Header;