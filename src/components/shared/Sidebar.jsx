import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/navigation';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClasses = 'flex gap-5 items-center font-light py-3 hover:bg-neutral-700 focus:bg-neutral-600 px-3 rounded-sm text-base hover:no-underline transition ease-in'


function Sidebar() {

  const { pathname } = useLocation()
  const [expanded, setExpanded] = useState(false);


  return (
    <div className={classNames(expanded ? 'max-w-full' : 'w-[4.6rem]', 'flex flex-col max-w-3xl bg-neutral-900 p-4 text-white transition ease-in ')}>
      {/* Logo */}
      <div className='flex gap-4 items-center  py-4 pr-5'>
        <div className='rounded-full p-2 hover:bg-gray-200 transition duration-200 ease-out' onClick={() => {
          setExpanded(prev => !prev)
        }}>
          <HiMenu fontSize={24} className='text-gray-500 cursor-pointer ' />
        </div>
        <span className='text-xl text-neutral-100 font-medium'>AdminPanel</span>
      </div>


      {/* Top part */}
      <div className='flex-1 py-8 flex flex-col gap-0.5 '>
        {
          DASHBOARD_SIDEBAR_LINKS.map((item) => {
            return (
              <div key={item.key}>
                <NavLink to={item.path} className={classNames(pathname == item.path ? 'hover:bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}  >
                  <span className='text-xl'>{item.icon}</span>
                  {
                    expanded ? <span>{item.label}</span> : null
                  }

                </NavLink>
              </div>
            )
          })
        }
      </div>

      {/* Bottom Part */}
      <div className='flex flex-col pt-2 gap-0.5 border-t border-neutral-700'>
        {
          DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(
            (item) => {
              return (
                <div key={item.key}>
                  <NavLink to={item.path} className={classNames('text-white', linkClasses)}  >
                    <span className='text-xl'>{item.icon}</span>
                    {
                      expanded ? <span>{item.label}</span> : null
                    }

                  </NavLink>
                </div>)
            }
          )
        }
        <div className={classNames('text-red-500 cursor-pointer', linkClasses)}  >
          <span className='text-xl'>
            <HiOutlineLogout />
          </span>
          {
            expanded ? <span>Logout</span> : null
          }

        </div>


      </div>
    </div >
  )
}

export default Sidebar