import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'

function Dashboard() {
  return (
    <div className='border flex flex-col gap-4 p-4'>
      <DashboardStatsGrid />
      <TransactionChart />
      {/* <BuyerProfileChart /> */}
    </div>
  )
}

export default Dashboard