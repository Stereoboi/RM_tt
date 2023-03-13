import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
