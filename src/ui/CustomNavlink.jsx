import { NavLink } from "react-router-dom";

export function CustomNavlink({ children, to }) {
  const activeClass =
    "px-3 py-1.5 flex items-center gap-x-2 hover:text-primary-900 hover:bg-primary-100/50  duration-300 transition-all rounded-lg";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `bg-primary-100/50 ${activeClass} text-secondary-900`
            : `${activeClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
