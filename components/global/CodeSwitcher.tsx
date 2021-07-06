import React from 'react';
import {CodeIcon, EyeOffIcon} from "@heroicons/react/solid";

export interface Props {
    options: string[];
    active: string;
    onChange: (option:string) => void;
}

const CodeSwitcher:React.FC<Props> =({options,active,onChange}) => {
  return (
    <div className="group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200 w-min">
        {options.map((option,i)=>{
            return(
                <button
                    key={i}
                    onClick={()=>onChange(option)}
                    className={`${active === option ? 'bg-white border shadow':''} flex focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-md focus:outline-none focus-visible:ring-offset-gray-100 ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100`}>
                    {active === option ? <CodeIcon className='h-5 w-5 mr-2 text-primary ' /> : <EyeOffIcon className='h-5 w-5 mr-2 text-gray-600' />} {option.toUpperCase()}
                </button>
            )
            }
        )}
    </div>
  )
}

export default CodeSwitcher;
