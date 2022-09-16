import { Link, NavLink, Outlet, RouteObject } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

type LayoutProps = {
  childrenRoutes: RouteObject[];
};
function Layout({ childrenRoutes }: LayoutProps) {
  return (
    <>
      <main className="relative w-full h-full flex flex-col md:flex-row">
        <aside className="bg-sky-700 p-4 w-full md:w-1/5">
          <Link to={`/`}>Home Logo</Link>
          <h1 className="text-md font-bold">ANUWONG PROFILE</h1>
          <p className="text-2xl">this area should contain details</p>
          <p>some badges or cool logos</p>
          <NavBar childrenRoutes={childrenRoutes} />
        </aside>
        <div className="p-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Layout;
