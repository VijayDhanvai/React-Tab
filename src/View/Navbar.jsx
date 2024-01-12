import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Navbar() {
    return (<nav className="navbar navbar-expand navbar-dark bg-dark mb-2">
        <a className="navbar-brand p-2" href="#" > React Starter Kit  </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav mr-auto">
           
                <Link exact  to="/">
                    Home
                </Link>

                <Link  to="/tab">
                    Tab
                </Link>

                <Link  to="/accordiaon">
                    Accordiaon
                </Link>

                
            </ul>

        </div>
    </nav>)
}
export default Navbar;