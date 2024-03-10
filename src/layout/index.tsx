import { Outlet } from "react-router-dom";
import SideMenu from "@/components/sideMenu"
function Layout() {
  return (
    <div>
      <SideMenu />
      <Outlet />
    </div>
  )
}

export default Layout