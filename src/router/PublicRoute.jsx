import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"

export const PublicRoute = ({children}) => {

  const { logged } = useContext(AuthContext)
  
  return (
    (!logged)
    ? children
    : <Navigate to='/marvel' />
  )
}
