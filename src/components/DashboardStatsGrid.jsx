import React, { useEffect, useState } from 'react'
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from 'react-icons/io5';
import data from '../lib/data';


function DashboardStatsGrid() {

  const [totals, setTotals] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    totalCustomers: 0,
    totalOrders: 0,
    totalFemaleCustomer: 0,
    totalMaleCustomer: 0,
  });


  useEffect(() => {
    const calculateTotals = () => {
      const totalIncome = data.reduce((acc, item) => acc + item.income, 0);
      const totalExpenses = data.reduce((acc, item) => acc + item.expenses, 0)
      const totalCustomers = data.reduce((acc, item) => acc + item.customers, 0)
      const totalOrders = data.reduce((acc, item) => acc + item.orders, 0)


      setTotals({
        totalIncome, totalExpenses, totalCustomers, totalOrders

      });
    };
    calculateTotals();

    console.log(totals)
  }, []);

  return (
    <div className='flex gap-5 w-full'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>${totals.totalIncome}</strong>
            <span className='text-sm text-green-500 pl-2'>+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500'>
          <IoPieChart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>${totals.totalExpenses}</strong>
            <span className='text-sm text-green-500 pl-2'>-354</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
          <IoPeople className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Customer</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>${totals.totalCustomers}</strong>
            <span className='text-sm text-red-500 pl-2'>-54</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
          <IoCart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Order</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>${totals.totalOrders}</strong>
            <span className='text-sm text-green-500 pl-2'>-34</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

export default DashboardStatsGrid

function BoxWrapper({ children }) {
  return <div className='bg-gradient-to-br from-slate-200 to-blue-200 rounded-sm flex-1 border-gray-50 flex items-center p-4'>{children}</div>
}