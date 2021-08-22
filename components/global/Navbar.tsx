/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import navData from "../../utilities/navData";
import Link from 'next/link';
import {useRouter} from "next/router";
import clsx from "clsx";
import bkashLogo from './../../public/bkash.svg';
import Image from 'next/image';
import { prefix } from '../../utilities/prefix';


export interface Props {
}

export interface MobileToggleProps {
    open: boolean;
}

const IconComponent = () => {
    return (
        <div className="flex items-center h-full px-2 lg:px-0">
            <div className="flex items-center flex-shrink-0 h-full">
                <Link href={'/'} passHref>
                    <div className="block w-auto h-auto cursor-pointer lg:hidden">
                    <img
                        width={40}
                        height={40}
                        src={`${prefix}/bkash-small.svg`}
                        alt="bkash Small Logo"
                    />
                    </div>
                </Link>
                <Link href={'/'} passHref>
                    <div className="hidden w-auto h-full lg:flex lg:cursor-pointer" >
                     <img
                        width={100}
                        height={40}
                        src={`${prefix}/bkash.svg`}
                        alt="bkash Logo"
                     />
                    </div>
                </Link>
            </div>
        </div>
    )
}

const MobileToggle:React.FC<MobileToggleProps> = ({open}) => {
    return (
        <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                )}
            </Disclosure.Button>
        </div>
    )
}

const NavList = () => {
    const router= useRouter();
    return (
        <div className="hidden lg:block lg:ml-6">
            <div className="flex space-x-4">
                {navData.map((navLink)=>
                    navLink.type.toLowerCase() === 'link' ?
                        <a
                            key={navLink.id}
                            rel={'noreferrer noopener'}
                            href={navLink.link}
                            target={'_blank'}
                            className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md focus:text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                        >
                            {navLink.name}
                        </a>
                        :
                        <Link
                            passHref
                            key={navLink.id}
                            href={navLink.link}
                        >
                            <span className={clsx('cursor-pointer px-3 py-2 rounded-md text-sm font-medium', router.pathname.includes(navLink.link) ? 'bg-primary text-white': 'text-gray-700 focus:text-gray-700 hover:bg-gray-50 hover:text-gray-700')}>{navLink.name}</span>
                        </Link>
                )}
            </div>
        </div>
    )
}

const MobileNavList =  () => {
    const router= useRouter();
    return(
        <div className="px-2 pt-2 pb-3 space-y-1">
            {navData.map((navLink)=>
                navLink.type.toLowerCase() === 'link' ?
                    <a
                        key={navLink.id}
                        rel={'noreferrer noopener'}
                        href={navLink.link}
                        target={'_blank'}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md cursor-pointer hover:bg-gray-50 hover:text-gray-700"
                    >
                        {navLink.name}
                    </a>
                    :
                    <Link
                        passHref
                        key={navLink.id}
                        href={navLink.link}
                    >
                        <span className={clsx('cursor-pointer block px-3 py-2 rounded-md text-base font-medium', router.pathname === navLink.link ? 'bg-primary text-white': 'text-gray-700 hover:bg-gray-50 hover:text-gray-700 ')}>{navLink.name}</span>
                    </Link>
            )}
        </div>
    )
}

const Navbar:React.FC<Props> =() => {
    const router= useRouter();
  return (
      <Disclosure as="nav" className="sticky top-0 z-40 bg-white shadow">
          {({ open }) => (
              <>
                  <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
                      <div className="relative flex items-center justify-between h-16">
                         <IconComponent />
                          <MobileToggle open={open} />
                          <NavList />
                      </div>
                  </div>

                  <Disclosure.Panel className="lg:hidden">
                      <MobileNavList />
                  </Disclosure.Panel>
              </>
          )}
      </Disclosure>
  )
}

export default Navbar;
