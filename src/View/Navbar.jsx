import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Navbar() {
    return (<nav className=" flex items-center justify-between ">
        <Link className="  px-3 py-2 bg-sky-500 text-white  text-xl  font-title" href="/" > React & Tailwind  Ultimate Kit   </Link>


        <div className=""  >
            <ul className=" ">

                <Link className="px-2" exact to="/">
                    Home
                </Link>

                <Link className="px-2" to="/tab">
                    Tab
                </Link>

                <Link className="px-2" to="/accordiaon">
                    Accordiaon
                </Link>


            </ul>

        </div>
    </nav>)
}
export default Navbar;