import { Link } from "react-router-dom";
import { logo } from "../assets/assets";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  
  return (
    <div className="flex justify-between items-center p-2  h-20  shadow-lg bg-orange-200  sticky top-0">
      <Link to="/">
        <img className="h-12 w-auto" src={logo} alt="logo" />
      </Link>
      <div>
        <ul className="flex justify-between gap-3">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>contact us</li>
          </Link>
          <Link to="/cart">
            <li>cart:{cartItems?.length}</li>
          </Link>
        </ul>
      </div>
      <div className="px-2">
        {true ? <button>Log in</button> : <button>Log out</button>}
      </div>
    </div>
  );
};
export default Header;
