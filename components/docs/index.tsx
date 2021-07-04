import React,{Fragment} from 'react';
import {ChevronUpIcon } from '@heroicons/react/outline'
import {Disclosure,Transition} from "@headlessui/react";
import {leftBarDataProps} from "../../pages/docs";
import clsx from "clsx";


export interface Props {
    data: leftBarDataProps[];
}

const LeftBar:React.FC<Props> =({data}) => {
    console.log(data);
  return (
         <div className='hidden lg:block col-span-2 h-full overflow-auto no-scrollbar'>
             <div className="flex flex-col flex-grow h-full border-r border-gray-200 pt-2 pb-4 bg-white overflow-y-auto">
                 <div className="flex-grow flex flex-col">
                     <nav className="flex-1 px-2 bg-white space-y-2" aria-label="Sidebar">
                         {data.map((sideBar,i:number)=>
                             <Disclosure as="div" className="mt-2" key={i}>
                                 {({ open }) => (
                                     <>
                                         <Disclosure.Button className={clsx('flex group justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-md hover:bg-primary hover:text-white transition duration-300 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75', open ? 'text-white bg-primary' : 'text-gray-600 bg-gray-50 ')}>
                                             <span>{sideBar.name}</span>
                                             <ChevronUpIcon
                                                 className={`${
                                                     open ? 'transform rotate-180 text-white' : 'text-gray-600'
                                                 } w-5 h-5 group-hover:text-white`}
                                             />
                                         </Disclosure.Button>
                                         <Transition
                                             show={open}
                                             as={Fragment}
                                             leave="transition ease-in duration-100"
                                             leaveFrom="opacity-100"
                                             leaveTo="opacity-0"
                                         >
                                             <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                                                 No.
                                             </Disclosure.Panel>
                                         </Transition>
                                     </>
                                 )}
                             </Disclosure>
                         )}
                     </nav>
                 </div>
             </div>
         </div>
  )
}

export default LeftBar;
