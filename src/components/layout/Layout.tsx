import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
