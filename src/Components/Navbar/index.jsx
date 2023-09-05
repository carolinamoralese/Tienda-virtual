import { useContext } from "react";
import { ShoppingCarConext } from "../../Context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const context = useContext(ShoppingCarConext)
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clotes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clotes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronicos"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronicos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furtures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furtures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">caro@mail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>🛒 {context.count}</li>
      </ul>
    </nav>
  );
};

export { Navbar };
