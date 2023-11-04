import img from "./../../Images/Frame.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-full border h-screen p-5 sticky top-0 shadow-md">
      <div className="container">
        <div className="sidebar-content">
          <div className="logo">
            <img src={img} alt="" className="mb-4" />
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search"
              className="px-4 border w-full rounded-lg mb-4"
            />
          </div>
          <div className="pages">
            <Link to="/products" className="block mb-4">
              Products
            </Link>
            <Link to="/stads" className="block mb-4">
              Stadiums
            </Link>
          </div>
          <div className="posts mb-4">
            <Link to="/posts">posts</Link>
          </div>
          <div className="signup">
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
