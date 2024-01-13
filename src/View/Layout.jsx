import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
       <Navbar/>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <div className="lg:container mx-auto px-4">

    
        <Outlet />

        </div>
      </div>
    );
  }

  export default Layout;