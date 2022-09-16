import { NavLink, RouteObject } from "react-router-dom";

type NavBarProps = {
  childrenRoutes: RouteObject[];
};
function NavBar({ childrenRoutes }: NavBarProps) {
  return (
    <nav className="w-full">
      {childrenRoutes.length ? (
        <ul className="flex flex-row justify-around w-full md:flex-col md:justify-center">
          {childrenRoutes?.map((r, i) =>
            i === 0 ? null : (
              <li className="" key={r.id + "asdf"}>
                <NavLink
                  key={r.id}
                  to={`${r.path}`}
                  className={({ isActive }) =>
                    isActive ? `no-underline` : "underline"
                  }
                >
                  {r.id?.toUpperCase()}
                </NavLink>
              </li>
            )
          )}
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default NavBar;
