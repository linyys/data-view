import { routes } from "@/router/route";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useClassNames } from "@/hooks/useClassNames";
function SideMenuItem({ path, label, change_now_path, now_path }: { path: string, label: string, change_now_path: (path: string) => void, now_path: string }) {
  let is_active = path === now_path;
  const createClassNames = useClassNames({
    'bg-blue-300': is_active,
  });
  return (
    <div onClick={() => change_now_path(path)} 
    className={"p-2 m-2 w-40 h-10 cursor-pointer  text-center transition rounded-md hover:bg-blue-300" + createClassNames()}
    >
      <Link to={path}>{label}</Link>
    </div>
  )
}


export default function SideMenu() {
  const [now_path, set_now_path] = useState(routes[0].path);
  const change_now_path = (path: string) => {
    set_now_path(path)
  }
  const nodes: JSX.Element[] = routes.map(item => {
    return (
      <SideMenuItem
      change_now_path={change_now_path}
       now_path={now_path}
       key={item.path} 
       path={item.path} 
       label={item.handle} 
       />
    )
  })
  return (
    <div className="flex flex-col w-52 h-screen bg-gray-100">{nodes}</div>
  )
}