import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "@/style/global.css";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen w-screen flex overflow-hidden  ">
      <aside
        className="w-[270px] border-r  border-gray-700
        p-4 overflow-hidden"
      >
        <LeftBar />
      </aside>

      <main
        className="flex-1 max-w-[830px] border-r  border-gray-700
     overflow-y-auto scrollbar-hide"
      >
        {children}
      </main>

      <aside
        className="w-[350px] pl-4
      "
      >
        <RightBar />
      </aside>
    </div>
    // <div className="flex">
    //   <div className="w-1/5 text-white p-4 border-gray-700 border-r">
    //     <LeftBar />
    //   </div>

    //   <section className="flex-1 ">{children}</section>
    //   <div className="w-1/4 text-white p-5 border-gray-700 border-l">
    //     <RightBar />
    //   </div>
    // </div>
  );
}

export default Layout;
