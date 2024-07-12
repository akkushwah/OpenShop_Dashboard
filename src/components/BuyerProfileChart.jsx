import React, { useEffect, useState } from 'react'
import data from '../lib/data';
import Chart from 'react-apexcharts';


function BuyerProfileChart() {

  const [PieData, setPieData] = useState({
    options: {
      labels: [],
      theme: {
        palette: 'palette3'
      },
    },
    series: [],


  });



  useEffect(() => {
    const calculateCustomers = () => {
      const totalFemale = data.reduce((acc, item) => acc + item.femaleCustomers, 0);
      const totalMale = data.reduce((acc, item) => acc + item.maleCustomers, 0);
      const totalOther = data.reduce((acc, item) => acc + item.Othercustomer, 0);

      const totals = [totalMale, totalFemale, totalOther]

      setPieData({
        options: {
          labels: ['Male', 'Female', 'Other'],
          theme: {
            palette: 'palette3'
          },
        },

        series: totals,
      }
      );
    };
    calculateCustomers();
  }, []);


  return (
    <div className='bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 h-fit'>
      <strong className='text-gray-700 font-medium'>Buyer Profile</strong>
      <div className='mt-6 text-xs flex justify-center items-center'>
        <Chart
          options={PieData.options}
          series={PieData.series}
          type="donut"
          width={450}
          height={400}
        />
      </div>
    </div>
  )
}

export default BuyerProfileChart