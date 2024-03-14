import { routes } from "@/router/route";
import { Link } from "react-router-dom";
function SideMenuItem({ path, label }: { path: string, label: string }) {
  return (
    <div className="hover:bg-blue-100 p-2 m-2 w-20 h-10 cursor-pointer text-center transition rounded-md">
      <Link to={path}>{label}</Link>
    </div>
  )
}


function SideMenu() {
  const nodes: JSX.Element[] = []
  const click = () => {

  }
  routes.forEach(item => {
    nodes.push(<SideMenuItem path={item.path} label={item.handle} />)
  })
  return (
    <div>{...nodes}</div>
  )
}

export default SideMenu