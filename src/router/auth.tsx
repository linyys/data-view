import Layout from "@/layout"
import { useSelector } from "react-redux";
import { useBlocker, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from "react";
import type { RootState } from "@/store";
export default function Auth() {
  const { auths, isLogin } = useSelector((state: RootState) => state.userInfo)
  const location = useLocation()
  const navigate = useNavigate();
  const oldLocation = useRef(isLogin ? '/home' : '/login');
  useBlocker(({ nextLocation }) => {
    return auths.indexOf(nextLocation.pathname) === -1
  });
  useEffect(() => {
    if (auths.indexOf(location.pathname) === -1) {
      navigate(oldLocation.current, { replace: false })
      return;
    }
    oldLocation.current = location.pathname;
  });
  return (
    <>
      <Layout />
    </>
  );
}