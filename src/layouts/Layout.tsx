import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "@/style/global.css";
import NavBar from "@/components/navbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* LeftBar: hidden di mobile, tampil di md ke atas */}
      <aside className="hidden md:block md:w-[220px] lg:w-[270px] border-r border-gray-700 p-4 overflow-hidden">
        <LeftBar />
      </aside>

      {/* Main content: full width di mobile, max width di md ke atas */}
      <main className="flex-1 w-full max-w-full md:max-w-[830px] border-r border-gray-700 overflow-y-auto scrollbar-hide mx-auto">
        {children}
      </main>

      {/* RightBar: hidden di mobile, tampil di lg ke atas */}
      <aside className="hidden lg:block lg:w-[350px] pl-4">
        <RightBar />
      </aside>

      <NavBar />
    </div>
  );
}

export default Layout;
