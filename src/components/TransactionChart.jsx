import React from 'react';
import data from '../lib/data'
import Chart from "react-apexcharts";
import BuyerProfileChart from './BuyerProfileChart';


function TransactionChart() {

  const barData = {
    series: [
      {
        name: "Income",
        data: data.map(item => item.income)
      },
      {
        name: "Expenses",
        data: data.map(item => item.expenses)
      },
    ],

    options: {
      chart: {
        id: "basic-bar",
        type: "bar"
      },
      theme: {
        palette: 'palette3'
      },
      xaxis: {
        categories: data.map(item => item.month)
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center',
            orientation: 'vertical',
          },

        },
      },
      dataLabels: {
        enabled: true,
        positon: "center"
      },
      legend: {
        position: 'top'
      },

    }
  };


  return (<>
    <div className='flex gap-6 relative'>
      <div className='h-auto bg-white p-4 border border-gray-200 flex flex-col flex-1 w-fit'>
        <strong className='text-gray-700 font-medium'>Transaction</strong>
        <div className='mt-3 flex-1'>
          <Chart
            options={barData.options}
            series={barData.series}
            type='bar'
            width={850}
            height={400}
          />
        </div>
      </div>
      <BuyerProfileChart />
    </div>
  </>


  )
}

export default TransactionChart