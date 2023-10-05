import React, { useEffect } from 'react'
import { getToken } from '../facades/localStorage'
import { useNavigate } from 'react-router-dom'

type Props = {
  typePage: number;
}

const PrivateRoute = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const tokenJWT = getToken()
    //console.log('PrivateRoute [tokenJWT]', tokenJWT)

    if (tokenJWT === null || tokenJWT === '') {
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
