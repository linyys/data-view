import { Outlet } from "react-router-dom";
import SideMenu from "@/components/sideMenu"
import BreadCrumb from "@/components/breadCrumb"
function Header() {
  return (
    <div className="h-14"></div>
  )
}
function Layout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <SideMenu />
          <div className="bg-slate-100 flex-1 p-2">
            <BreadCrumb />
            <div className="bg-white mt-2 p-1 rounded-l h-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Layout