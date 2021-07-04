import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import navData from "../../utilities/navData";
import Link from 'next/link';
import {useRouter} from "next/router";
import clsx from "clsx";

export interface Props {
}

export interface MobileToggleProps {
    open: boolean;
}

const IconComponent = () => {
    return (
        <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
                <Link href={'/'}>
                    <img
                        className="block lg:hidden h-8 w-auto cursor-pointer"
                        src="/bkash-small.svg"
                        alt="Workflow"
                    />
                </Link>
                <Link href={'/'}>
                    <img
                        className="hidden lg:block h-8 w-auto lg:cursor-pointer"
                        src="/bkash.svg"
                        alt="bkash Long Logo"
                    />
                </Link>
            </div>
        </div>
    )
}

const MobileToggle:React.FC<MobileToggleProps> = ({open}) => {
    return (
        <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
                            className="text-gray-700 focus:text-gray-700 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            {navLink.name}
                        </a>
                        :
                        <Link
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
                        className="cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        {navLink.name}
                    </a>
                    :
                    <Link
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
      <Disclosure as="nav" className="bg-white shadow sticky top-0 z-40">
          {({ open }) => (
              <>
                  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
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
