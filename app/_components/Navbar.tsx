'use client';

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { solutions } from '../_constants';
import { classNames } from '../_lib/utils';

export default function Navbar() {
  return (
    <header className={'sticky top-0 z-50 bg-white'}>
      <Popover className='relative bg-white'>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <span className='sr-only'>NextLMS</span>
              <Image
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg'
                alt=''
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <PopoverButton className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars2Icon className='h-6 w-6' aria-hidden='true' />
            </PopoverButton>
          </div>
          <PopoverGroup as='nav' className='hidden md:flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <PopoverButton
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}>
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </PopoverButton>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'>
                    <PopoverPanel className='absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                              <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12'>
                                <item.icon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Pricing
            </Link>
            <Link
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Partners
            </Link>
            <Link
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Company
            </Link>
          </PopoverGroup>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <Link
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              Sign in
            </Link>
            <Link
              href='#'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700'>
              Sign up
            </Link>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <PopoverPanel
            focus
            className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <Image
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg'
                      alt='Workflow'
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className='-mr-2'>
                    <PopoverButton className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </PopoverButton>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid grid-cols-1 gap-7'>
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white'>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5'>
                <div className='grid grid-cols-2 gap-4'>
                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Pricing
                  </Link>
                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Partners
                  </Link>
                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    Company
                  </Link>
                </div>
                <div className='mt-6'>
                  <Link
                    href='#'
                    className='w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700'>
                    Sign up
                  </Link>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?
                    <Link href='#' className='text-gray-900'>
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </header>
  );
}