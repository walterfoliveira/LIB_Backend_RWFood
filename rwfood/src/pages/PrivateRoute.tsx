import React, { useEffect, useContext } from 'react'
import { getToken } from '../facades/localStorage'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

type Props = {
  typePage: number;
}

const PrivateRoute = () => {

  const globalContext = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    const tokenJWT = getToken()
    //console.log('PrivateRoute [tokenJWT]', tokenJWT)

    if (tokenJWT === null || tokenJWT === '' || globalContext?.user?.id === 0) {
      globalContext?.logout()
      navigate('/login')
    }
  }, [])

  return (
    <>
      {/* filtro */}
    </>
  )
}

export default PrivateRoute
