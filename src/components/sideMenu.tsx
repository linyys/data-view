import { routes } from "@/router/route";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useClassNames } from "@/hooks/useClassNames";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
function SideMenuItem({ path, label, nowPath }: { path: string, label: string, nowPath: string }) {
  const isActive = path === nowPath;
  const createClassNames = useClassNames({
    'bg-blue-300': isActive,
  });
  return (
    <Link to={path} replace>
      <div className={"p-2 m-1 w-40 h-10 cursor-pointer  text-center transition rounded-md hover:bg-blue-300" + createClassNames()}
      >
        {label}
      </div>
    </Link>
  )
}


export default function SideMenu() {
  const [nowPath, setNowPath] = useState(routes[0].path);
  const location = useLocation()
  const { auths } = useSelector((state: RootState) => state.userInfo)
  useEffect(() => {
    setNowPath(location.pathname)
  }, [location.pathname])
  const nodes: (JSX.Element | undefined)[]  = routes.map(item => {
    if (auths.includes(item.path)) {
      return (
        <SideMenuItem
          key={item.path}
          path={item.path}
          label={item.handle} 
          nowPath={nowPath} />
      )
    }
  })
  console.log(nodes);
  return (
    <div className="flex flex-col">{nodes}</div>
  )
}