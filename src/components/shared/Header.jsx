import React, { useState } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();


  return (
    <div className='bg-white h-14 px-4 flex justify-between items-center border-b border-gray-200'>

      <div className='flex items-center border rounded-sm px-3 gap-2'>
        <HiOutlineSearch fontSize={20} className='text-gray-500' />
        <input className='text-sm focus:outline-none active:outline-none h-10 max-w-2xl'
          type="text" placeholder='Search....' />
      </div>

      <div className='flex items-center gap-3 mr-4'>
        <Popover className="relative group ">
          <PopoverButton className='p-1.5 rounded-sm focus:outline-none  text-gray-700 hover:opacity-100 active:bg-gray-100 transition ease-linear duration-200 group-data-[open]:bg-gray-200'>
            <HiOutlineChatAlt fontSize={24} className='text-gray-500  font-bold ' />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            transition
            className="transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 mt-2.5 z-10 w-80 -translate-x-20  ">
            <div className='shadow-md bg-white rounded-sm ring-1 ring-black ring-opacity-5 px-5 py-5'>
              <strong className='text-gray-700 font-medium'>Messages</strong>
              <div className='text-sm pt-2'>
                This is message panel
              </div>
            </div>
            {/* <a href="/analytics">Analytics</a> */}
          </PopoverPanel>
        </Popover>

        <Popover className="relative group ">
          <PopoverButton className='p-1.5 rounded-sm focus:outline-none  text-gray-700 hover:opacity-100 active:bg-gray-100 transition ease-linear duration-200 group-data-[open]:bg-gray-200'>
            <HiOutlineBell fontSize={24} className='text-gray-500  font-bold' />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            transition
            className="transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 mt-2.5 z-10 w-80 ">
            <div className='mr-8 shadow-md bg-white rounded-sm ring-1 ring-black ring-opacity-5 px-5 py-5'>
              <strong className='text-gray-700 font-medium'>Notification</strong>
              <div className='text-sm pt-2'>
                This is Notification  panel
              </div>
            </div>
          </PopoverPanel>
        </Popover>
        {/* <a href="/analytics">Analytics</a> */}

        <Menu as="div" className="relative">
          <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-1 focus:ring-neutral-400">
            <span className='sr-only'>Open user Menu</span>
            <div className='h-10 w-10 rounded-full bg-cover bg-blue-500'
              style={{ backgroundImage: 'url("https://avatar.iran.liara.run/public/girl")' }}>
              {/* <img src="" alt="" /> */}
              <span className='sr-only'>Akanksha</span>
            </div>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            transition
            className="origin-top-right transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 mt-2.5 z-10 w-48 rounded-sm shadow-sm p-2 bg-white -translate-x-5 ring-1 ring-black ring-opacity-10 focus:outline-none"
          >
            <MenuItem>
              <button className="w-full text-left py-2 px-3 data-[focus]:bg-gray-100 rounded-sm text-gray-700" onClick={() => {
                navigate('/profile')
              }}>Your Profile</button>
            </MenuItem>
            <MenuItem>
              <button className="w-full text-left py-2 px-3 data-[focus]:bg-gray-100 rounded-sm text-gray-700" onClick={() => {
                navigate('/settings')
              }}>Setting</button>
            </MenuItem>
            <MenuItem>
              <button className="w-full text-left py-2 px-3 data-[focus]:bg-gray-100 rounded-sm text-gray-700" onClick={() => {
                navigate('/logout')
              }}>Logout</button>
            </MenuItem>

          </MenuItems>
        </Menu>


      </div>

    </div >

  )
}

export default Header