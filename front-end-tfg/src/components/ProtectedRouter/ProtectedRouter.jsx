import {Outlet, Navigate } from 'react-router-dom'

export const ProtectedRouter = ({children, isAuth}) => {

    if(!isAuth) return <Navigate to="/acceso"/>

  return children ? <>{children}</> : <Outlet/>
}
