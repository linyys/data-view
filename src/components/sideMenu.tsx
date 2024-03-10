import { routes } from "@/router";
import { Link } from "react-router-dom";
function SideMenuItem({ path, label }: { path: string, label: string }) {
  return (
    <div>
      <Link to={path}>{label}</Link>
    </div>
  )
}

function SideMenu() {
  const nodes: JSX.Element[] = []
  routes.forEach(item => {
    nodes.push(<SideMenuItem path={item.path} label={item.handle} />)
  })
  return (
    <div>{...nodes}</div>
  )
}

export default SideMenu