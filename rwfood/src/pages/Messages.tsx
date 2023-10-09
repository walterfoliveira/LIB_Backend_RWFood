import React, { useState, useEffect, useContext } from 'react'
import { HubConnectionBuilder } from '@microsoft/signalr';
import { GlobalContext } from '../contexts/GlobalContext'
import PrivateRoute from './PrivateRoute'
import DashboardStatsGrid from '../components/DashboardStatsGrid';

type Props = {
  typePage: number;
}

const Messages = () => {
  const globalContext = useContext(GlobalContext)

  return (
    <>
      <PrivateRoute />
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />

      </div>
    </>
  )
}

export default Messages
