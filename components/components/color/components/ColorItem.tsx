import React from 'react';
import {ClipboardCopyIcon, EyeIcon} from "@heroicons/react/solid";
import {copyTextToClipboard} from "../../../../utilities/utilFunction";

export interface Props {
    data: any;
}

const ColorItem: React.FC<Props> = ({data}) => {

    const [isCopied, setIsCopied] = React.useState(false);
    const handleCopy = (hex: string) => {
        copyTextToClipboard(hex);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500)
    }

    return (
        <>
            <div>
                <div className="w-32 flex-shrink-0">
                    <div className="h-10 flex flex-col justify-center">
                        <div className="text-sm font-semibold text-gray-900">{data.name}</div>
                        <div>
                            <code className="text-xs text-gray-500">{data.description}</code>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
                <div className="flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                    {data.colors.map((color: any, index: number) =>
                        <div key={index} className="space-y-1.5 transition fade-in-out duration-100">
                            <div
                                onClick={() => handleCopy(color.hex)}
                                role={'button'}
                                className="h-16 group w-full shadow-md w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                                style={{background: color.hex}}>
                                <div
                                    className='hidden group-hover:block h-full group-hover:flex group-hover:items-center group-hover:justify-center'>
                                    <div className='shadow-lg bg-gray-900 rounded-md p-3 bg-opacity-70 shadow-md flex text-xs font-normal'>
                                        {isCopied ?
                                            <div className='flex items-center justify-center'><ClipboardCopyIcon className='h-4 w-4 text-white mr-1'/><p className='text-white'>Copied!</p></div> :
                                            <div  className='flex items-center justify-center'><EyeIcon className='h-3 w-3 text-white mr-1'/><p className="text-white">{color.hex}</p></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                                <div className="w-6 font-medium text-gray-900">{color.name}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ColorItem;
